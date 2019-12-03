import React, {Component} from 'react';
import last from 'lodash/last'
import Node from './Node';
import './Folder.css';
class Folder extends Component{
    state = {
        data : {
            '/root': {
            path : '/root',
             children : ['/root/hello','/root/check']
            }
        },
        currentPath : '/root',
        isRoot : true
    }
    createFolder = (value) => {
        this.setState({
            
        })
    }
    handleDown = () => {
        const {currentPath} = this.state;

        let current ;
        if(currentPath === '/root'){
            this.setState({
                isRoot : true,
                currentPath : '/'
            })
        }else{
            current= currentPath.replace('/' + last(currentPath.split('/')),'');
            this.setState({
                currentPath : current
            })
        }
        
    }
    changeFolder = (value) => {
        console.log("value", value);
        this.setState({
            isRoot : false
        })
    }
    render(){
        const {currentPath} = this.state;
            console.log("currentpath :",currentPath);

        return(
            <React.Fragment>
                <main>
                    <div className="folder-directory">
                        <div className="menubar">
                            <div className="action">
                                <button onClick = {this.handleDown}>U</button>
                                <button>D</button>
                                <button>C</button>    
                            </div>
                            <div className="root-path">
                                <div className="displaybox">{this.state.data[currentPath].path}</div>
                            </div>

                        </div>

                        <div className="node">
                            <Node 
                                node = {this.state.data[currentPath].path}
                                childNode = {this.state.data[currentPath].children}
                                isRoot = {this.state.isRoot}
                                changeFolder = {this.changeFolder}
                            />
                        </div>
                    </div>
                </main>
                {/* <button value = '/root' onClick = {(e) => this.createFolder(e.target.value)}><FaFolder /></button> */}
            </React.Fragment>
        );
    }
}

export default Folder;