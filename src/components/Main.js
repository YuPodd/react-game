import React, { Component } from 'react'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import ReactDOM from 'react-dom';

 class Main extends Component {
  
      chooseElement(e){
        console.log(e.target.className);
       }

     generateNumber () {
         const max = 3;
         const min = 1;
         let computer_element;
         const random_number = Math.floor(Math.random()*(max-min+1)+min);
         console.log(random_number)
         switch(random_number){
            case 1:
                computer_element = (
                    <button type="button" value="rock" className="computer_button btn btn-outline-info"><img  className="rock" src={rock} alt="rock"/></button>
                  );
                  break;
            case 2:
               computer_element = (
                    <button type="button" value="paper" className="computer_button btn btn-outline-info"><img  className="paper" src={paper} alt="paper"/></button>
                  );
                  break;  
            case 3:
               computer_element = (
                  <button type="button" value="scissors" className="computer_button btn btn-outline-info"><img  className="scissors" src={scissors} alt="scissors"/></button>
                 );
            break;            
         }
        ReactDOM.render(computer_element, document.querySelector('.computer_icons_wrapper')); 
        
      }
   
      render() {
        return (
            <main>
                <div className="main_wrapper">
                <section className="user_wrapper">
              <h4>You:</h4>
              <div className="user_icons_wrapper">
               <button type="button" value="rock" className="user_button btn btn-outline-warning"><img src={rock} className="rock" alt="rock" onClick={(e) => {this.chooseElement(e); this.generateNumber()}}/></button>
               <button type="button" value="paper" className="user_button btn btn-outline-warning"><img src={paper} className="paper" alt="paper" onClick={(e) => {this.chooseElement(e); this.generateNumber()}}/></button>
               <button type="button" value="scissors" className="user_button btn btn-outline-warning"><img src={scissors} className="scissors" alt="scissors" onClick={(e) => {this.chooseElement(e); this.generateNumber()}} /></button>
               </div>
              </section>
              <section className="computer_wrapper">
              <h4>Computer:</h4>
              <div className="computer_icons_wrapper">
              
              
              </div>
              </section>
              </div>
            </main>
        )
    }
}

export default  Main

