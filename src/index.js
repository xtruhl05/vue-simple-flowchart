
import SimpleFlowchart from './components/SimpleFlowchart.vue'
import SimpleFlowchartDummyNode  from './components/FlowchartDummyNode.vue'

export default {
    install (Vue) {
        Vue.component('SimpleFlowchart', SimpleFlowchart);
        Vue.component('SimpleFlowchartDummyNode', SimpleFlowchartDummyNode);
    }
}

export { SimpleFlowchart, SimpleFlowchartDummyNode };
