<template>
  <div class="outerWrap " :style="outerWrapStyle"
       @mousemove="handleMove"
       @mouseup="handleUp"
       @mousedown="handleDown">
    <div class="flowchart-container"
         :style="getWrapStyle"
        >

      <svg :style="getSvgStyle" >
        <g id="zoomTarget">
        <flowchart-link v-bind.sync="link"
          v-for="(link, index) in lines"
          :key="`link${index}`"
          @deleteLink="linkDelete(link.id)">
        </flowchart-link>
        </g>

      </svg>

      <flowchart-node v-bind.sync="node"
                      v-for="(node, index) in scene.nodes"
                      :key="`node${index}`"
                      :options="nodeOptions"
                      @linkingStart="linkingStart(node.id, $event)"
                      @linkingStop="linkingStop(node.id, $event)"
                      @nodeSelected="nodeSelected(node.id, $event)"
                      @nodeContentDblclick="nodeContentDblclick(node.id, $event)"
                      :horizontal="horizontal"
                      :nodeWidth="nodeWidth"
                      :nodeHeight="nodeHeight"
                      :portSize="portSize"
      >
        <slot slot="nodeContent" name="nodeContent" v-bind:nodeContent="{node}"></slot>

      </flowchart-node>
    </div>
  </div>

</template>

<script>
import FlowchartLink from './FlowchartLink.vue';
import FlowchartNode from './FlowchartNode.vue';
import { getMousePosition } from '../assets/utilty/position';



export default {
  name: 'VueFlowchart',
  props: {
    scene: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
          nodes: [],
          links: [],
        }
      }
    },
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: Number,
      default: 400,
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    nodeWidth: {
      type: Number,
      default: 120
    },
    nodeHeight: {
      type: Number,
      default: 80
    },
    portSize: {
      type: Number,
      default: 20
    },
    zoom: {
      type: Number,
      default: 1.0
    }

  },
  data() {
    return {
      test: {
        x: 0,
        y: 0
      },
      action: {
        linking: false,
        dragging: false,
        scrolling: false,
        selected: 0,
      },
      mouse: {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
      },
      draggingLink: null,
      rootDivOffset: {
        top: 0,
        left: 0
      },
    };
  },
  components: {
    FlowchartLink,
    FlowchartNode,
  },
  computed: {
    getWrapStyle(){

      return {
        'width':  this.width * 3 +'px',
        'height':  this.height * 3 +'px',
        'transform': 'scale('+this.zoom+')',
        'transform-origin':  'center center',
        'position':  'absolute',
        'left':  '-100%',
        'top':  '-100%',
      }
    },
    outerWrapStyle(){
      return {
        'width': this.width+'px',
        'height': this.height+'px',
      }
    },

    getSvgStyle(){

      let x = this.width * 3;
      let y = this.height * 3;

      return {
        'min-width': x+'px',
        'min-height': y+'px',
      }
    },
    nodeOptions() {
      return {
        centerY: this.scene.centerY,
        centerX: this.scene.centerX,
        scale: this.scene.scale,
        offsetTop: this.rootDivOffset.top,
        offsetLeft: this.rootDivOffset.left,
        selected: this.action.selected,
      }
    },
    lines() {

      let position = [];
      position[0] = this.horizontal ? "right" : 'bottom';
      position[1] = this.horizontal ? "left" : 'top';

      const lines = this.scene.links.map((link) => {

        const fromNode = this.findNodeWithID(link.from.node)
        const toNode = this.findNodeWithID(link.to.node)

        let x, y, cy, cx, ex, ey;
        x = this.scene.centerX + fromNode.x;
        y = this.scene.centerY + fromNode.y;

        [cx, cy] = this.getPortPosition(position[0], x, y, link.from.output, fromNode.outputs.length);
        x = this.scene.centerX + toNode.x;
        y = this.scene.centerY + toNode.y;
        [ex, ey] = this.getPortPosition(position[1], x, y, link.to.input, toNode.inputs.length);
        return { 
          start: [cx, cy], 
          end: [ex, ey],
          id: link.id,
        };
      })
      if (this.draggingLink) {
        let x, y, cy, cx;

        const fromNode = this.findNodeWithID(this.draggingLink.from.node)

        x = this.scene.centerX + fromNode.x;
        y = this.scene.centerY + fromNode.y;
        [cx, cy] = this.getPortPosition(position[0], x, y, this.draggingLink.from.output, fromNode.outputs.length);
        // push temp dragging link, mouse cursor postion = link end postion

        lines.push({ 
          start: [cx, cy], 
          end: [this.draggingLink.mx, this.draggingLink.my],
        })
      }
      return lines;
    }
  },
  mounted() {
    this.rootDivOffset.top = this.$el ? this.$el.offsetTop : 0;
    this.rootDivOffset.left = this.$el ? this.$el.offsetLeft : 0;
  },
  methods: {
    findNodeWithID(id) {
      return this.scene.nodes.find((item) => {
        return id === item.id
      })
    },
    getPortPosition(type, x, y, port, isMultiport) {
      let portOffset = 0;

      if(isMultiport > 1) {
        if (port === 1) {
          portOffset = -this.portSize;
        } else {
          portOffset = this.portSize;
        }
      }

      switch (type) {
        case 'top':
          return [x + this.nodeWidth / 2, y];
        case 'bottom':
          return [x + this.nodeWidth / 2, y + this.nodeHeight];
        case 'left':
          return [x - this.portSize / 2, y + this.nodeHeight / 2  + portOffset];
        case 'right':
          return [x + this.nodeWidth + this.portSize / 2, y + this.nodeHeight / 2  + portOffset];
      }
    },
    linkingStart(index, outputId) {
      console.log(index, outputId)
      this.action.linking = true;
      this.draggingLink = {
        from: {node: index, output: outputId},
        mx: undefined,
        my: undefined,
      };
    },
    linkingStop(index, inputId) {
      console.log(index, inputId)
      // add new Link
      if (this.draggingLink && this.draggingLink.from.node !== index) {
        // check link existence
        const existed = this.scene.links.find((link) => {
          return link.from.node === this.draggingLink.from.node
                  && link.to.node === index
                  && link.to.input === inputId
                  && link.from.output === this.draggingLink.from.output;
        })
        if (!existed) {
          let maxID = Math.max(0, ...this.scene.links.map((link) => {
            return link.id
          }))
          const newLink = {
            id: maxID + 1,
            from: {node: this.draggingLink.from.node, output: this.draggingLink.from.output},
            to: {node: index, input: inputId},
          };
          console.log(newLink)
          this.scene.links.push(newLink)
          this.$emit('linkAdded', newLink)
        } else {
          console.log("Link already exists!");
        }
      }
      this.draggingLink = null
    },
    linkDelete(id) {
      const deletedLink = this.scene.links.find((item) => {
          return item.id === id;
      });
      if (deletedLink) {
        this.scene.links = this.scene.links.filter((item) => {
            return item.id !== id;
        });
        this.$emit('linkBreak', deletedLink);
      }
    },
    nodeSelected(id, e) {
      this.action.dragging = id;
      this.action.selected = id;
      this.$emit('nodeClick', id);
      this.mouse.lastX = e.pageX || e.clientX + document.documentElement.scrollLeft
      this.mouse.lastY = e.pageY || e.clientY + document.documentElement.scrollTop
    },
    handleMove(e) {


      if (this.action.linking) {
        [this.mouse.x, this.mouse.y] = getMousePosition(this.$el, e);
        [this.draggingLink.mx, this.draggingLink.my] = [this.mouse.x * (1/this.zoom), this.mouse.y * (1/this.zoom)];
      }
      if (this.action.dragging) {
        this.mouse.x = e.pageX || e.clientX + document.documentElement.scrollLeft
        this.mouse.y = e.pageY || e.clientY + document.documentElement.scrollTop
        let diffX = this.mouse.x - this.mouse.lastX;
        let diffY = this.mouse.y - this.mouse.lastY;

        this.mouse.lastX = this.mouse.x;
        this.mouse.lastY = this.mouse.y;
        this.moveSelectedNode(diffX * (1/this.zoom), diffY * (1/this.zoom));
      }
      if (this.action.scrolling) {
        [this.mouse.x, this.mouse.y] = getMousePosition(this.$el, e);
        let diffX = this.mouse.x - this.mouse.lastX;
        let diffY = this.mouse.y - this.mouse.lastY;

        this.mouse.lastX = this.mouse.x;
        this.mouse.lastY = this.mouse.y;

        this.scene.centerX += diffX * (1/this.zoom);
        this.scene.centerY += diffY * (1/this.zoom);

        // this.hasDragged = true
      }
    },
    handleUp(e) {
      const target = e.target || e.srcElement;
      if (this.$el.contains(target)) {
        if (typeof target.className !== 'string' || target.className.indexOf('node-input') < 0) {
          this.draggingLink = null;
        }
        if (typeof target.className === 'string' && target.className.indexOf('node-delete') > -1) {
          // console.log('delete2', this.action.dragging);
          this.nodeDelete(this.action.dragging);
        }
      }
      this.action.linking = false;
      this.action.dragging = null;
      this.action.scrolling = false;
    },
    handleDown(e) {
      const target = e.target || e.srcElement;
      // console.log('for scroll', target, e.keyCode, e.which)
      if ((target === this.$el || target.matches('svg, svg *')) && e.which === 1) {
        this.action.scrolling = true;
        [this.mouse.lastX, this.mouse.lastY] = getMousePosition(this.$el, e);
        this.action.selected = null; // deselectAll
      }
      this.$emit('canvasClick', e);
    },
    moveSelectedNode(dx, dy) {
      let index = this.scene.nodes.findIndex((item) => {
        return item.id === this.action.dragging
      })
      let left = this.scene.nodes[index].x + dx / this.scene.scale;
      let top = this.scene.nodes[index].y + dy / this.scene.scale;
      this.$set(this.scene.nodes, index, Object.assign(this.scene.nodes[index], {
        x: left,
        y: top,
      }));
    },
    nodeDelete(id) {
      this.scene.nodes = this.scene.nodes.filter((node) => {
        return node.id !== id;
      })
      this.scene.links = this.scene.links.filter((link) => {
        return link.from.node !== id && link.to.node !== id
      })
      this.$emit('nodeDelete', id)
    },
    nodeContentDblclick(id, e) {
      this.$emit('nodeContentDblclick', id, e)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .outerWrap {
    margin: 0;
    background: rgba(255,0,0,0.1);
    position: relative;
    overflow: hidden;
  }

.flowchart-container {
  margin: 0;
  background: #ddd;
  position: relative;
  overflow: hidden;

  svg {
    cursor: grab;
      left: 0px;
      top: 0px;
      display: block;
      position: absolute;
      background-image: none;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .mdi {
    font-size: 1.6rem;
  }
}
</style>
