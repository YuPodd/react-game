import React, { Component } from 'react'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import win from '../assets/win2.gif'
import ReactDOM from 'react-dom';

 class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: "null",
          computer: "null",
          score: 0
        };
      }
      
    chooseElement(e){
        this.setState({
          user: e.target.className
          }, () => { this.compareElements() });

       }
    generateAnimation () {
    const animation_el = (
        <div className="text-center">
        <div className="spinner-border text-info" role="status">
         <span className="sr-only"></span>
         </div>
        </div>
        );
     ReactDOM.render(animation_el, document.querySelector('.computer_icons_wrapper')); 
    }
    generateNumber () {
         const max = 3;
         const min = 1;
         let computer_element;
         const random_number = Math.floor(Math.random()*(max-min+1)+min);
         
         switch(random_number){
            case 1:
              this.setState({
                computer: "rock"
              });
                computer_element = (
                    <button type="button" value="rock" className="computer_button btn btn-outline-info"><img  className="rock" src={rock} alt="rock"/></button>
                  );
                  
                  break;
            case 2:
              this.setState({
                computer:  "paper"
              });
               computer_element = (
                    <button type="button" value="paper" className="computer_button btn btn-outline-info"><img  className="paper" src={paper} alt="paper"/></button>
                  );
                 
                  break;  
            case 3:
              this.setState({
                computer:  "scissors"
              });
               computer_element = (
                  <button type="button" value="scissors" className="computer_button btn btn-outline-info"><img  className="scissors" src={scissors} alt="scissors"/></button>
                 );
                
            break;            
         }
         
         setTimeout(() => {
            ReactDOM.render(computer_element, document.querySelector('.computer_icons_wrapper')); 
          }, 200);
      
      }
      compareElements () {
        let computer = this.state.computer;
        let user = this.state.user;
        console.log(computer);
        console.log(user);
       
            if(computer === user){
                console.log('win-win')
              
            }  if (computer === "rock" && user === "paper"){
                console.log('user + 1 to score, user win')
                this.setState({
                  score:  this.state.score + 1
                }, () => { this.checkScore() });
               
            } else if (computer === "rock" && user === "scissors"){
                console.log('user - 1 to score, comp win')
                this.setState({
                  score:  this.state.score - 1
                }, () => { this.checkScore() });

            } else if (computer === "paper" && user === "rock"){
                console.log('computer + 1 to score, comp win')
                this.setState({
                  score: this.state.score - 1
                }, () => { this.checkScore() });

            } else if (computer === "paper" && user === "scissors"){
                console.log('user + 1 to score,user win')
                this.setState({
                  score:  this.state.score + 1
                }, () => { this.checkScore() });
            } else if (computer === "scissors" && user === "paper"){
                console.log('user - 1 to score, comp win')
                this.setState({
                  score:  this.state.score - 1
                }, () => { this.checkScore() });
            } else if (computer === "scissors" && user === "rock"){
                console.log('user + 1 to score, user win')
                this.setState({
                  score:  this.state.score + 1
                }, () => { this.checkScore() });
            }
            
              
      }
      checkScore (){
        if (this.state.score === 2){
         const winElement = <img  className="win" src={win} alt="win"/>
          alert('you win!');
          
            ReactDOM.render(winElement, document.querySelector('.score'));
            setTimeout(() => {
              this.startNewGame()
            }, 2000);
   

        }
      }
      startNewGame (){
        const emptyElement = '';
            this.setState({
                score: 0
                });
        ReactDOM.render(emptyElement, document.querySelector('.computer_icons_wrapper'));
      }

      render() {
        return (
            <main>
                <div className="main_wrapper">
                <section className="user_wrapper">
              <h4>You:</h4>
              <div className="user_icons_wrapper">
               <button type="button" value="rock" className="user_button btn btn-outline-warning"><img src={rock} className="rock" alt="rock" onClick={(e) => {this.chooseElement(e); this.generateAnimation(); this.generateNumber()}}/></button>
               <button type="button" value="paper" className="user_button btn btn-outline-warning"><img src={paper} className="paper" alt="paper" onClick={(e) => {this.chooseElement(e); this.generateAnimation(); this.generateNumber()}}/></button>
               <button type="button" value="scissors" className="user_button btn btn-outline-warning"><img src={scissors} className="scissors" alt="scissors" onClick={(e) => {this.chooseElement(e);this.generateAnimation(); this.generateNumber()}} /></button>
               </div>
              </section>
              <section className="computer_wrapper">
              <h4>Computer:</h4>
              <div className="computer_icons_wrapper">
              </div>
              </section>
              <section className="score_wrapper">
              <h4>Score:</h4>
              <div className="score bg-light">
                {this.state.score}
              </div>
              </section>
              <button type="button" className="new_game btn btn-info" onClick={this.startNewGame.bind(this)}>New Game</button>
              </div>
            </main>
        )
    }
}

export default  Main

