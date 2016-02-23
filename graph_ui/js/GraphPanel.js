/**
 * GraphPanel.js
 *
 * @author Andrew Bowler, Alberto Gomez-Estrada
 */

'use strict';

var React = require('react');
var Graph = require('./Graph.js');

var outerBorderStyle = {
  position:'relative',
  top:'400px',
  width:'600px',
  height:'44px',
  margin:'auto auto auto auto',
  border:'8px solid rgba(0,0,0,0.1)',
  background: 'rgb(252,252,252)', /* Old browsers */
  background: '-moz-linear-gradient(top,  rgba(252,252,252,1) 0%, rgba(237,237,237,1) 100%)', /* FF3.6+ */
  background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(252,252,252,1)), color-stop(100%,rgba(237,237,237,1)))', /* Chrome,Safari4+ */
  background: '-webkit-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%)', /* Chrome10+,Safari5.1+ */
  background: '-o-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%)', /* Opera 11.10+ */
  background: '-ms-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%)', /* IE10+ */
  background: 'linear-gradient(to bottom,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%)', /* W3C */
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#fcfcfc\', endColorstr=\'#ededed\',GradientType=0 )', /* IE6-9 */
  borderRadius:'72p',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
};

var borderStyle = {
  position:'absolute',
  top:'10px',
  left:'10px',
  width:'500px',
  height:'23px',
  margin:'auto auto auto auto',
  boxShadow:'0px 0px 4px rgba(0,0,0,0.2)',
  borderRadius:'10px'
};

var loadingBarStyle = {
  position:'absolute',
  top:'0px',
  left:'0px',
  width: '100%',
  height: '100%',
  backgroundColor:'rgba(200,200,200,0.8)',
  WebkitTransition: 'all 0.5s ease',
  MozTransition: 'all 0.5s ease',
  msTransition: 'all 0.5s ease',
  OTransition: 'all 0.5s ease',
  transition: 'all 0.5s ease',
  opacity:'1'
};

var barStyle = {
  position:'absolute',
  top:'0px',
  left:'0px',
  width:'20px',
  height:'20px',
  margin:'auto auto auto auto',
  borderRadius:'11px',
  border:'2px solid rgba(30,30,30,0.05)',
  background: 'rgb(0, 173, 246)', /* Old browsers */
  boxShadow: '2px 0px 4px rgba(0,0,0,0.4)'
};

var textStyle = {
  position:'absolute',
  top:'8px',
  left:'530px',
  width:'30px',
  height:'50px',
  margin:'auto auto auto auto',
  fontSize:'22px',
  color: '#000000'
};

var GraphPanel = React.createClass({
  render: function() {
    return (
      <div>
        <Graph 
          filter={this.props.filter}
          graphData={this.props.graphData} 
          logger={this.props.logger} 
          updateSelectedNode={this.props.updateSelectedNode}
        />
        <div id='loadingBar' style={loadingBarStyle}>
          <div className='outerBorder' style={outerBorderStyle}>
            <div id='text' style={textStyle}>0%</div>
            <div id='border' style={borderStyle}>
                <div id='bar' style={barStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GraphPanel;
