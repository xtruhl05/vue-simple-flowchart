<template>
  <div class="flowchart-node" :width="nodeWidth" :height="nodeHeight" :style="nodeStyle"
                 :id="'node-' +  id"
       @mousedown="handleMousedown"
       @mouseover="handleMouseOver"
       @mouseleave="handleMouseLeave"
       v-bind:class="{selected: options.selected === id}">


    <div v-for="(i, index) in inputs.length"
         :key="id +'-input-'+i"
         :id="'node-' +  id +'-input-'+i"
         class="node-port node-input"
         v-show="nodesWithoutInput(type)"
         @mousedown="inputMouseDown"
         @mouseup="inputMouseUp($event, i)"
         :style="multiportStyle(index, true)"
    >
      {{inputs[index].name}}
    </div>


    <div class="node-main">
      <div class="node-label" :style="'background: '+color">
          {{label}}
      </div>

      <div
              class="node-content"
              @dblclick="nodeContentDblclick"
      >
        <slot name="nodeContent">
            {{content}}
        </slot>
      </div>
    </div>

    <div v-for="(i, index) in outputs.length"
         :key="type + '-' +  id + '-output-' + i"
         :id="'node-' +  id + '-output-' + i"
         class="node-port node-output"
         v-show="nodesWithoutOutput(type)"
         @mousedown="outputMouseDown($event, i)"
         :style="multiportStyle(index, false)"
    >
      {{outputs[index].name}}
    </div>

    <div v-show="show.delete"
         class="node-delete"
         :style="'width: '+portSize+'; height: '+portSize+';'"
    >&times;</div>
  </div>

</template>

<script>
export default {
  name: 'FlowchartNode',
  props: {
    id: {
      type: [ String, Number ],
      default: 'undefined',
      validator(val) {
        return typeof val === 'number' || typeof val === 'string'
      }
    },
    x: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    y: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    type: {
      type: String,
      default: 'Default'
    },
    label: {
      type: String,
      default: 'input name'
    },
    content: {
      type: String,
      default: ''
    },
    inputs: {
      type: Array,
      default(){
        return [{name: "", color: "blue"}]
      }
    },
    outputs: {
      type: Array,
      default(){
        return [{name: "", color: "blue"}]
      }
    },
    lineContent: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
          content: '',
        }
      }
    },
    horizontal: {type: Boolean, default: false},
    color: {
      type: String,
      default: "green"
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
  },
  data() {
    return {
      show: {
        delete: false,
      }
    }
  },
  mounted() {
  },
  computed: {
    nodeStyle() {
      return {
        top: this.options.centerY + this.y * this.options.scale + 'px', // remove: this.options.offsetTop +
        left: this.options.centerX + this.x * this.options.scale + 'px', // remove: this.options.offsetLeft +
        'min-width': this.nodeWidth + 'px',
        'min-height': this.nodeHeight + 'px',
        width: "min-content",
        height: "min-content",
      }
    },
  },
  methods: {
    multiportStyle(position, isInput){

      // Single port style
      if(this.inputs.length <= 1) {
        return {
          width: this.portSize,
          height: this.portSize,
          'background-color': isInput ? this.inputs[0].color : this.outputs[0].color,
        };
      }

      if(position === 0) {
        return {
          width: this.portSize,
          height: this.portSize,
          'margin-top': -this.portSize+'px',
          'background-color': isInput ? this.inputs[0].color : this.outputs[0].color,

        }
      } else {
        return {
          width: this.portSize,
          height: this.portSize,
          'margin-top': this.portSize+'px',
          'background-color': isInput ? this.inputs[1].color : this.outputs[1].color,
        }
      }
    },
    handleMousedown(e) {
      const target = e.target || e.srcElement;
      // console.log(target);
      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
      e.preventDefault();
    },
    handleMouseOver() {
      this.show.delete = true;
    },
    handleMouseLeave() {
      this.show.delete = false;
    },
    outputMouseDown(e, id) {
      console.log(e)
      this.$emit('linkingStart', id)
      e.preventDefault();
    },
    inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp(e, id) {
      console.log(e)
      this.$emit('linkingStop', id)
      e.preventDefault();
    },
    nodeContentDblclick() {
      this.$emit('nodeContentDblclick')
    },
    nodesWithoutInput(type){
      switch(type){
        case 'source':
        case 'timer':
          return false;
      }
      return true;
    },
    nodesWithoutOutput(type){
      switch(type){
        case 'alert':
        case 'beeper':
        case 'action':
          return false;
      }
      return true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$themeColor: rgb(255, 136, 85);
$portSize: 20;
$halfPortSize: 10;
$nodeHeight: 80;
$nodeWidth: 120;

.float-left {
  float: left;
}

.flowchart-node {
  margin: 0;
  width: #{$nodeWidth}px;
  height: #{$nodeHeight}px;
  position: absolute;
  box-sizing: border-box;
  border: none;
  background: white;
  z-index: 1;
  opacity: .9;
  cursor: move;
  transform-origin: top left;
  .node-main {
    text-align: center;
    .node-label {
      background: $themeColor;
      color: white;
      font-size: 1.2rem;
      padding: 6px;
    }
    .node-content {
      font-size: 1rem;
      padding-top: 6px;
    }
  }
  .node-port {
    position: absolute;
    width: #{$portSize}px;
    height: #{$portSize}px;
    font-size: #{$portSize*0.7}px;
    text-align: center;
    font-weight: bold;

    border: 1px solid #ccc;
    border-radius: 100px;
    background: white;
    &:hover {
      background: $themeColor;
      border: 1px solid $themeColor;
    }
  }
  .node-input {
    right: 100%;
    top: 50%-$halfPortSize;
  }

  .node-output {
    left: 100%;
    top: 50%-$halfPortSize;
  }

  .node-delete {
    position: absolute;
    right: -6px;
    top: -6px;
    font-size: 12px;
    width: 1rem;
    height: 1rem;
    color: $themeColor;
    cursor: pointer;
    background: white;
    border: 1px solid $themeColor;
    border-radius: 100px;
    text-align: center;
    &:hover{
      background: $themeColor;
      color: white;
    }
  }
}
.selected {
  box-shadow: 0 0 0 2px $themeColor;
}
</style>
