import React, { Component } from 'react'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

 class Main extends Component {
  
      chooseElement(e){
        console.log(e.target.className);
       }

     generateNumber () {
         const max = 3;
         const min = 1
        return  console.log(Math.floor(Math.random()*(max-min+1)+min))
      }
   
      render() {
        return (
            <main>
                <div className="main_wrapper">
                <section className="user_wrapper">
              <h4>You:</h4>
              <div className="user_icons_wrapper">
               <button type="button" value="rock" className="user_button btn btn-outline-warning"><img src={rock} className="rock" alt="rock"  onClick={(e) => {this.chooseElement(e); this.generateNumber()}}/></button>
               <button type="button" value="paper" className="user_button btn btn-outline-warning"><img src={paper} className="paper" alt="paper" onClick={(e) => {this.chooseElement(e); this.generateNumber()}}/></button>
               <button type="button" value="scissors" className="user_button btn btn-outline-warning"><img src={scissors} className="scissors" alt="scissors" onClick={(e) => {this.chooseElement(e); this.generateNumber()}} /></button>
               </div>
              </section>
              <section className="computer_wrapper">
              <h4>Computer:</h4>
              <div className="user_icons_wrapper">

              </div>
              </section>
              </div>
            </main>
        )
    }
}

export default  Main

