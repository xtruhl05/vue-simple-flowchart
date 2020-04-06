<template>
  <div id="app">
    <h1> simple flowchart</h1>
    <div class="tool-wrapper">
      <select v-model="newNodeType">
        <option v-for="(item, index) in menu" :key="index" :value="index">{{item.label}}</option>
      </select>
      <button @click="addNode(menu[newNodeType])">ADD</button>
    </div>

    <div style="padding: 0 100px">
    <FlowchartDummyNode
            v-bind.sync="menu[3]"
            horizontal
            :nodeWidth="150"
            :nodeHeight="80"
            :portSize="20"
    ></FlowchartDummyNode>
    </div>

    <div @wheel="zoomEvent">
      <simple-flowchart :scene.sync="scene"
        @nodeClick="nodeClick"
        @nodeDelete="nodeDelete"
        @linkBreak="linkBreak"
        @linkAdded="linkAdded"
        @canvasClick="canvasClick"
        @nodeContentDblclick="nodeContentDblclick"
        horizontal
        :nodeWidth="150"
        :nodeHeight="80"
        :portSize="20"
        :height="800"
        :width="1400"
        :zoom="zoom"
      >

        <template slot="nodeContent" slot-scope="node">
          <template v-if="node.nodeContent.node.type === 'comparator'">
            X <span v-html="node.nodeContent.node.content"></span> Y
          </template>

          <template v-else-if="node.nodeContent.node.type === 'constant'">
            <span v-if="node.nodeContent.node.unit === 'pH'">pH </span>
             <span v-html="node.nodeContent.node.content"></span>
            <span v-if="node.nodeContent.node.unit !== 'pH'">{{node.nodeContent.node.unit}}</span>
          </template>

          <template v-else>
            {{node.nodeContent.node.content}}
          </template>
        </template>

      </simple-flowchart>
    </div>
  </div>
</template>

<script>
  /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
  import SimpleFlowchart from './components/SimpleFlowchart.vue'
  import FlowchartDummyNode from './components/FlowchartDummyNode.vue'

  const nodeColors =  {
    source: "green",
    constant: "teal",
    timer: "red",
    comparator: "purple",
    alert: "orange",
    beeper: "darkpink",
    action: "red",
  };

export default {
  name: 'app',
  components: {
    SimpleFlowchart,
    FlowchartDummyNode
  },
  data() {
    return {
      zoom: 1,
      menu: [
          {
            id: 'teplota',
            type: 'source',
            label: 'Teplota',
            content: 'Aktuální teplota',
            color: nodeColors.source,
            inputs: [
            ],
            outputs: [
              {name: "O", color: "teal"},
            ]
          },
          {
            id: 'ph',
            type: 'source',
            label: 'pH sonda',
            content: 'Aktuální hodnota pH sondy 1.',
            color: nodeColors.source,
            inputs: [
            ],
            outputs: [
              {name: "O", color: "teal"},
            ]
          },
          {
            id: 'event',
            type: 'source',
            label: 'Událost',
            content: 'Plánovaná událost',
            color: nodeColors.event,
            inputs: [
            ],
            outputs: [
              {name: "O", color: "teal"},
            ]
          },
          {
            id: 'comparator',
            type: 'comparator',
            label: 'Komparátor',
            content: 'X > Y',
            color: nodeColors.comparator,
            inputs: [
              {name: "I", color: "cyan"},
              {name: "I", color: "cyan"},
            ],
            outputs: [
              {name: "T", color: "green"},
              {name: "F", color: "red"},
            ]
          },
          {
            id: 'alert',
            type: 'alert',
            label: 'Upozornění',
            content: 'Vizuální upozornění',
            color: nodeColors.alert,
            inputs: [
              {name: "I", color: "cyan"},
            ],
            outputs: [
            ]
          },
          {
            id: 'beeper',
            type: 'beeper',
            label: 'Upozornění',
            content: 'Akustické upozornění',
            color: nodeColors.beeper,
            inputs: [
              {name: "I", color: "cyan"},
            ],
            outputs: [
            ]
          },
          {
            id: 'action',
            type: 'action',
            label: 'Akce',
            content: 'Typ akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akce',
            color: nodeColors.action,
            inputs: [
              {name: "I", color: "cyan"},
            ],
            outputs: [
            ]
          },
      ],
      scene: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 1,
            x: -700,
            y: -69,
            type: 'source',
            label: 'Teplota',
            content: 'Senzory teploty',
            color: nodeColors.source,
            inputs: [
            ],
            outputs: [
              {name: "O", color: "green"},
            ]
          },
          {
            id: 2,
            x: -357,
            y: 80,
            type: 'comparator',
            label: 'Když',
            content: '&leq;',
            color: nodeColors.comparator,
            inputs: [
              {name: "X", color: "cyan"},
              {name: "Y", color: "cyan"}
            ],
            outputs: [
              {name: "T", color: "green"},
              {name: "F", color: "red"}
            ]
          },
          {
            id: 3,
            x: -100,
            y: 80,
            type: 'action',
            label: 'Upozornění',
            content: 'Vizuální upozornění',
            color: nodeColors.action,
            inputs: [
              {name: "I", color: "cyan"},
            ],
          },
          {
            id: 4,
            x: -700,
            y: 199,
            type: 'constant',
            label: 'Konstanta',
            content: '37°C',
            color: nodeColors.constant,
            inputs: [
            ],
            outputs: [
              {name: "O", color: "gray"},
            ]
          },
        ],
        links: [
          {
            id: 1,
            from: {node: 1, output: 1}, // node id the link start
            to:  {node: 2, input: 1},  // node id the link end
          },
          {
            id: 2,
            from: {node: 2, output: 2}, // node id the link start
            to: {node: 3, input: 1},  // node id the link end
          },
          {
            id: 3,
            from: {node: 4, output: 1}, // node id the link start
            to: {node: 2, input: 2},  // node id the link end
          }
        ]
      },
      newNodeType: 0,
      newNodeLabel: '',
      nodeCategory:[
        'source',
        'constant',
        'timer',
        'comparator',
        'alert',
        'beeper',
        'action',
      ],
    }
  },
  methods: {
    zoomEvent(event){

      console.log("tady venku")
      const min = 0.5;
      const max = 2;
      const step = 0.1;

      if(event.deltaY < 0 && this.zoom < max) {
        this.zoom += step;
      } else if(event.deltaY > 0 && this.zoom > min) {
        this.zoom -= step;
      }
    },
    canvasClick(e) {
      console.log('canvas Click, event:', e)
    },
    nodeContentDblclick(id) {
      console.log('node content double-click, id:', id)
    },
    addNode(item) {
      let maxID = Math.max(0, ...this.scene.nodes.map((link) => {
        return link.id
      }))
      this.scene.nodes.push({
        id: (maxID + 1),
        x: -20,
        y: -20,
        type: item.type,
        label: item.label ? item.label: `Undefined-${maxID + 1}`,
        content: item.content,
        color: item.color,
        inputs: item.inputs,
        outputs: item.outputs,

      })

      console.log(this.scene.nodes);

    },
    nodeClick(id) {
      console.log('node click', id);
    },
    nodeDelete(id) {
      console.log('node delete', id);
    },
    linkBreak(id) {
      console.log('link break', id);
    },
    linkAdded(link) {
      console.log('new link added:', link);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 800px;
  .tool-wrapper {
    position: relative;
  }
}
</style>
