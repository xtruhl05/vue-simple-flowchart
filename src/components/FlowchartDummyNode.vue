<template>
    <div class="flowchart-node" :style="nodeStyle">
        <div v-for="(i, index) in inputs.length"
             :key="id +'-input-'+i"
             :id="'node-' +  id +'-input-'+i"
             class="node-port node-input"
             v-show="nodesWithoutInput(type)"
             :style="multiportStyle(index, true)"
        >
            {{inputs[index].name}}
        </div>

        <div class="node-main">
          <div class="node-label" :style="'background: '+color">
              {{label}}
          </div>
          <div v-html="getContent" class="node-content"></div>
        </div>
        <div v-for="(i, index) in outputs.length"
             :key="type + '-' +  id + '-output-' + i"
             :id="'node-' +  id + '-output-' + i"
             class="node-port node-output"
             v-show="nodesWithoutOutput(type)"
             :style="multiportStyle(index, false)"
        >
            {{outputs[index].name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlowchartDummyNode',
  props: {
    id: {
      type: [ String, Number ],
      default: 'undefined',
      validator(val) {
        return typeof val === 'number' || typeof val === 'string'
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
    lineContent: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          scale: 1,
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
          'min-width': this.nodeWidth + 'px',
          'min-height': this.nodeHeight + 'px',
          width: "min-content",
          height: "min-content"
      }
    },
      getContent(){
          if(this.type === "comparator"){
              return "X " + this.content + ' Y';
          }

          return this.content;
      }
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
  border: 1px solid gray;
  min-width: #{$nodeWidth}px;
  min-height: #{$nodeHeight}px;
  position: relative;
  box-sizing: border-box;
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

</style>
