/**
 * Settings.js
 *
 * Modal for users to set Graphalyzer parameters, including selecting 
 * graphs, subgraph and filter parameters
 * 
 * @author Andrew Bowler, Alberto Gomez-Estrada, Michael Sgroi, Taylor Welter
 */

'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Button = ReactBootstrap.Button,
    Modal = ReactBootstrap.Modal,
    Panel = ReactBootstrap.Panel;
var GraphLoader = require('./GraphLoader.js');
var SubgraphInput = require('./SubgraphInput.js');
var FilterPanel = require('./FilterPanel.js');

var Settings = React.createClass({
  getInitialState: function() {
    return {
      filter: {
        property: null,
        option: null,
        value: null
      },
      selectedGraph: null,
      subgraph: null,
      show: false
    };
  },
  
  /**
   * Closes the modal when clicking the close button
   */
  close: function() {
    this.setState({
      show: false
    });
  },

  /**
   * Sets app's state before requesting a graph from the server
   */
  draw: function() {
    var self = this;
    var graph;
    this.close();
    if (this.state.selectedGraph) {
      graph = {
        filter: self.state.filter,
        selectedGraph: self.state.selectedGraph
      };
      
      if (this.state.subgraph) {
        if (this.state.subgraph.depth > 0)
          graph.subgraph = this.state.subgraph;
      }

      this.props.requestGraph(graph);
    }
  },

  /**
   * Sets the currently selected graph
   */
  selectGraph: function(graph) {
    this.setState({
      selectedGraph: graph
    });
  },

  /**
   * Updates filter state - for other components
   */
  updateFilter: function(filter) {
    this.setState({
      filter: filter
    });
  },

  /**
   * Updates subgraph state - for other components
   */
  updateSubgraph: function(subgraph) {
    this.setState({
      subgraph: subgraph
    });
  },

  render: function() {
    return (
      <div className='modal-container'>
        <Button 
          bsStyle='primary'
          onClick={() => this.setState({show: true})}
        >Settings
        </Button>
        <Modal
          show={this.state.show}
          container={this}
          aria-labelledby='settings-title'>
          <Modal.Header id='settings-modal-header'>
            <Modal.Title id='settings-title'>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Panel header='Load Graph' bsStyle='primary'>
              <GraphLoader
                getGraphList={this.props.getGraphList}
                graphList={this.props.graphList}
                selectGraph={this.selectGraph}
              />
              <SubgraphInput
                updateSubgraph={this.updateSubgraph}
              />
            </Panel>
            <Panel header='Filter Graph' bsStyle='primary'>
              <FilterPanel
                clearFilter={this.props.clearFilter}
                updateFilter={this.updateFilter}
              />
            </Panel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle='primary' onClick={this.draw}>Draw</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
});

module.exports = Settings;
