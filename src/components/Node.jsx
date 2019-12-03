import React from 'react';
import { FaFolder } from 'react-icons/fa';
import last from 'lodash/last';
class Node extends React.Component{

    render(){
        return(
            <React.Fragment>
                {
                (this.props.isRoot) ? <div className="node_detail" id = {"/root"} onClick = {(e) => this.props.changeFolder(e.target.id)}>
                <i className="icon-folder"><FaFolder /></i>
                
                <span>{last(this.props.node.split('/'))}</span>
            </div> :
                this.props.childNode.map((childrenNode,key) => (                  
                 <div className="node_detail" key = {key} value = {childrenNode} onClick = {(e) => this.props.changeFolder(e.target.value)}>
                    <i className="icon-folder"><FaFolder /></i>
                    
                    <span>{last(childrenNode.split('/'))}</span>
                </div>
                ))}
                {/* <Node 
                    node = {this.props.data["/root"].children}
                /> */}
            </React.Fragment>
        )
    }
}

export default Node;