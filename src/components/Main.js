import React, { Component } from 'react'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

 class Main extends Component {
      render() {
        return (
            <main>
                <div className="main_wrapper">
                <section className="user_wrapper">
              <h4>You:</h4>
              <div className="user_icons_wrapper">
               <button type="button" className="btn btn-outline-warning"><img src={rock} className="rock" alt="rock" /></button>
               <button type="button" className="btn btn-outline-warning"><img src={paper} className="paper" alt="paper" /></button>
               <button type="button" className="btn btn-outline-warning"><img src={scissors} className="scissors" alt="scissors" /></button>
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
