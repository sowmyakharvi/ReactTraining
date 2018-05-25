import React,{Component} from "react"
import PropTypes from "prop-types"
import axios from "axios"

export class Friends extends Component{
    state = {friends: ["friend 1", "friend 2", "friend 3"]}
    render(){
        return <div>
            <h3>Friends are</h3>
            <AddFriend addNew={this.handleAddNew}></AddFriend>
            <ShowList names={this.state.friends}/>            
            </div>
    }
    handleAddNew =(friendname) =>{
        this.setState({friends: [...this.state.friends, friendname]})
    }
}

class ShowList extends Component {
    render(){
      return <div>
        <ul>
          {this.props.names.map((friend, idx) =>{
            return <li key={idx}>{friend}</li>
        })}
          </ul>
      </div>
    }
  }

  class AddFriend extends Component {
      state = {newFriend: "Guest"}
      render(){
        return <div>
            <input type="text" placeholder ="Enter Friend name" value={this.state.newFriend}
            onChange={this.handleOnChange}></input>
            <button onClick={this.handleButtonClick}>Add Friend</button>
            </div>
      }
      handleOnChange = (event) =>{
          //console.log("onchange function")
          this.setState({newFriend : event.target.value})
      }
      handleButtonClick = ()=>{
        this.props.addNew(this.state.newFriend)
      }
  }

  AddFriend.propTypes = {
      addNew : PropTypes.func.isRequired
  }

  ShowList.defaultProps = {
      names : []
  }

  export class ServiceDemo extends Component{
      render(){
          return <div>
              <h3>Rest APi example</h3>

          </div>
      }

      componentDidMount(){
          //this.loadDataFromFillText();
          this.loadProducts()
      }

      loadProducts(){
          axios.get("http://localhost:3000/wsproducts").then(
            (resp) =>{
                console.log("shopping API success", resp.data)
                
              },
              (err) =>{
                console.log("shopping API Error", err)
            }
          )
      }
      loadDataFromFillText(){
          axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}").then(
              (resp) =>{
                console.log("success", resp.data)
                
              },
              (err) =>{
                console.log("Error", err)
            }
          )
      }
  }

  