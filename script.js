@media only screen and (min-width:200px) and (max-width: 300px){
	*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
          font-size: large;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:12%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size:large;
                      }

                      #addtask{position: absolute;
                               right: 5%;
                               top:3%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: x-small;}

                              /* .addtask_heading{font-size: x-small;
                               position: absolute;
                               right: 10%;
                               top:5%;}*/
                               #popupbox{width: 68vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:37%;
                             left: 14%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}

                             


                        .popup_heading{margin-left:23%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 4%;
                            margin-top:3%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 15%;
                          width: 18vw;
                           height:3vh;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: blue;
                           font-size: x-small;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:18vw;
                            height: 3vh;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: blue;
                            font-size:x-small;
                        }
                         #popupbox2{width: 66vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:40%;
                             left: 17%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:22%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 3%;
                            margin-top:3%;

                          } 
                          /*.close{margin-top: 8%;
                            margin-left: 20%;
                           width:16vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  
*/








                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                       flex-direction: column;
                                       margin-right: 2%;
                                       margin-left: 16%;
                                       margin-top: 8%;

                                       }
                                       .flex_item{width: 63vw;
                                            min-height: 30vh;
                                            border:1px solid black;
                                            background-color: #E1F8DC;
                                            margin-top: 10%;
                                            background-image: url(./cartoon_img.jpg);
                                            background-repeat: no-repeat;
                                            

                                             border-radius: 10px;
                                             box-shadow:8px 10px 6px  white;
                                             box-sizing: border-box;
                                             
                                            /*background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 20%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
 /* background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
  /*background-image: radial-gradient(circle, red, yellow, green);
*/
  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}

  
  .innerdiv{line-height:40px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



}


@media only screen and (min-width:301px) and (max-width: 420px){
	*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
          font-size: large;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:12%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size:large;
                      }

                      #addtask{position: absolute;
                               right: 5%;
                               top:3%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: small;}

                              /* .addtask_heading{font-size: x-small;
                               position: absolute;
                               right: 10%;
                               top:5%;}*/
                               #popupbox{width: 68vw;
                             height:15vh;
                           
                           
                             position: fixed;
                             top:37%;
                             left: 14%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}

                             


                        .popup_heading{margin-left:25%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 17%;
                            margin-top:4%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 15%;
                          width: 18vw;
                           height:3vh;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                           font-size: x-small;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 12%;
                            width:18vw;
                            height: 3vh;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-size:x-small;
                        }
                         #popupbox2{width: 66vw;
                             height:15vh;
                            
                             position: fixed;
                             top:40%;
                             left: 17%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:22%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 15%;
                            margin-top:3%;

                          } 
                          /*.close{margin-top: 8%;
                            margin-left: 20%;
                           width:16vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  
*/








                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                       flex-direction: column;
                                       margin-right: 2%;
                                       margin-left: 16%;
                                       margin-top: 8%;

                                       }
                                       .flex_item{width: 63vw;
                                            min-height: 30vh;
                                            border:1px solid black;
                                            background-color: #E1F8DC;
                                            margin-top: 10%;
                                            background-image: url(./cartoon_img.jpg);
                                            background-repeat: no-repeat;

                                            

                                             border-radius: 10px;
                                             box-shadow:8px 10px 6px  white;
                                             box-sizing: border-box;
                                             
                                            /*background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 20%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
/*  background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
  /*background-image: radial-gradient(circle, red, yellow, green);
*/
  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}

  
  .innerdiv{line-height:40px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



}


@media only screen and (min-width:421px) and (max-width: 550px){
		*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
          font-size: large;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:12%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size:large;
                      }

                      #addtask{position: absolute;
                               right: 5%;
                               top:3%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: small;}

                              /* .addtask_heading{font-size: x-small;
                               position: absolute;
                               right: 10%;
                               top:5%;}*/
                               #popupbox{width: 45vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:37%;
                             left: 25%;
                             z-index: 1;
                             background-color:#4a5250;
                           
                             border: 1px solid white;}

                             


                        .popup_heading{margin-left:25%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 17%;
                            margin-top:4%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 15%;
                          width: 15vw;
                           height:3vh;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                           font-size: x-small;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 12%;
                            width:15vw;
                            height: 3vh;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-size:x-small;
                        }
                         #popupbox2{width: 45vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:40%;
                             left: 25%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:22%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 15%;
                            margin-top:3%;

                          } 
                          /*.close{margin-top: 8%;
                            margin-left: 20%;
                           width:16vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  
*/








                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                      
                                       margin-right: 2%;
                                       margin-left: 16%;
                                       margin-top: 8%;

                                       }
                                       .flex_item{width: 63vw;
                                            min-height: 30vh;
                                            border:1px solid black;
                                            background-color: #E1F8DC;
                                            margin-top: 10%;
                                            background-image: url(./cartoon_img.jpg);
                                            background-repeat: no-repeat;
                                            

                                             border-radius: 10px;
                                             box-shadow:8px 10px 6px  white;
                                             box-sizing: border-box;
                                             
                                            /*background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 20%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  /*background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
  /*ackground-image: radial-gradient(circle, red, yellow, green);*/

  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}

  
  .innerdiv{line-height:40px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



}





@media only screen and (min-width:551px) and (max-width: 950px){
		*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
          /*font-size: large;
        }*/}


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:12%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size:larger;
                      }

                      #addtask{position: absolute;
                               right: 5%;
                               top:3%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: x-large;}

                              /* .addtask_heading{font-size: x-small;
                               position: absolute;
                               right: 10%;
                               top:5%;}*/
                               #popupbox{width: 45vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:37%;
                             left: 25%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}

                             


                        .popup_heading{margin-left:29%;
                        	margin-top: 2%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 24%;
                            margin-top:10%;
                            width: 45vw;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 12%;
                          width: 15vw;
                           height:3vh;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                           font-size:large;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 12%;
                            width:15vw;
                            height: 3vh;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-size:large;
                        }
                         #popupbox2{width: 45vw;
                             height:15vh;
                           
                            
                             position: fixed;
                             top:40%;
                             left: 25%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:35%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 25%;
                            margin-top:5%;

                          } 
                          /*.close{margin-top: 8%;
                            margin-left: 20%;
                           width:16vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  
*/








                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                      
                                       margin-right: 2%;
                                       margin-left: 5%;
                                       margin-top: 8%;

                                       }
                                       .flex_item{width: 40vw;
                                            min-height: 30vh;
                                            border:1px solid black;
                                            background-color: #E1F8DC;
                                            margin-top: 10%;
                                            background-image: url(./cartoon_img.jpg);
                                            background-repeat: no-repeat;

                                             border-radius: 10px;
                                             box-shadow:8px 10px 6px  white;
                                             box-sizing: border-box;
                                             
                                            /*background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 30%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  /*background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
 /* background-image: radial-gradient(circle, red, yellow, green);*/

  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}

  
  .innerdiv{line-height:40px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



}



@media only screen and (min-width:951px) and (max-width: 1250px){
	*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:10%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size: x-large;
                      }

                      #addtask{position: absolute;
                               right: 7%;
                               top:6%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: x-large;}
                               #popupbox{width: 26vw;
                             height:15vh;
                             position: fixed;
                           
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}   



                        .popup_heading{margin-left:25%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 18%;
                            margin-top:3%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            /*background-color: red;*/
                            font-weight: bold;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }
                         #popupbox2{width: 26vw;
                             height:15vh;
                            
                             position: fixed;
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:25%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 18%;
                            margin-top:3%;

                          } 
                          .close{margin-top: 8%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  









                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                       margin-right: 2%;
                                       margin-left: 2%;
                                       margin-top: 8%;
                                       }
.flex_item{width: 20vw;
           min-height: 30vh;
           border:1px solid black;
          background-color: #E1F8DC;
          margin-top: 2%;
          border-radius: 10px;
         box-shadow:8px 10px 6px  white;
         background-image: url(./cartoon_img.jpg);
         background-repeat: no-repeat;
         box-sizing: border-box;
         position: relative;
       /* background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 40%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  /*background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
 /* background-image: radial-gradient(circle, red, yellow, green);*/

  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}


  
  .innerdiv{line-height:50px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}

}


@media only screen and (min-width:1251px) and (max-width: 1550px){
	*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:10%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size: x-large;
                      }

                      #addtask{position: absolute;
                               right: 7%;
                               top:6%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: x-large;}
                               #popupbox{width: 26vw;
                             height:20vh;
                           
                            
                             position: fixed;
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}   



                        .popup_heading{margin-left:25%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 18%;
                            margin-top:3%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 8%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            /*background-color: red;*/
                            font-weight: bold;

                          } 
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }
                         #popupbox2{width: 26vw;
                             height:20vh;
                            
                            
                             position: fixed;
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color:#4a5250 ;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:25%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 18%;
                            margin-top:3%;

                          } 
                          .close{margin-top: 8%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 8%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  









                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                       margin-right: 2%;
                                       margin-left: 2%;
                                       margin-top: 8%;
                                       }
.flex_item{width: 20vw;
           min-height: 30vh;
           border:1px solid black;
          background-color: #E1F8DC;
          background-image: url(./cartoon_img.jpg);
          background-repeat: no-repeat;
          margin-top: 2%;
          border-radius: 10px;
         box-shadow:8px 10px 6px  white;
         box-sizing: border-box;
         position: relative;
       /* background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 40%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
 /* background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
  /*background-image: radial-gradient(circle, red, yellow, green);*/

  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}


  
  .innerdiv{line-height:50px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



	}


	@media only screen and (min-width:1551px) and (max-width: 1850px){
	*{margin:0px;
 padding: 0px;
 box-sizing: border-box;
 }

 body{width:100vw;
      height: 100vh;
      background-color: black;
      position: relative;
      overflow-x: hidden;}
      #main_container{
        width: 100%;
        height:100vh;
        border-top: 5px solid white;
        border-left: 5px solid white;
     background-image: url(./lamborgini.jpg);
        background-repeat: no-repeat;
        background-size:cover;}

        #tasklist{color:white;
          position: absolute;
          left:2%;
          top: 5%;
        }


        #noitem{color: white;
             position: absolute;
             left:2%;
             top:10%;
             font-family: sans-serif;}
             #plussign{width:8vw;
                      height: 8vh;
                      border-radius:50%;
                      background-color:red;
                      font-weight:bolder;
                      font-size: x-large;
                      }

                      #addtask{position: absolute;
                               right: 7%;
                               top:6%;
                               font-weight: bolder;
                               color: white;
                               text-decoration: none;
                               font-size: x-large;}
                               #popupbox{width: 26vw;
                             height:20vh;
                           
                            
                             position: fixed;
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;}   



                        .popup_heading{margin-left:25%;
                          color: #000066;
                        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;} 
                          .input{margin-left: 18%;
                            margin-top:3%;
                            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                          } 
                         
                        .close{margin-top: 6%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            /*background-color: red;*/
                            font-weight: bold;

                          } 
                             .add{margin-top: 6%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }
                         #popupbox2{width: 26vw;
                             height:20vh;
                            
                            
                             position: fixed;
                             top:40%;
                             left: 36%;
                             z-index: 1;
                             background-color: #4a5250;
                           
                             border: 1px solid white;} 
                          .popup2_heading{margin-left:25%;
                          color: #000066;
                          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                        } 
                          #input-2{margin-left: 18%;
                            margin-top:3%;

                          } 
                          .close{margin-top: 6%;
                            margin-left: 20%;
                           width:6vw;
                          border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;}
                          
                             .add{margin-top: 6%;
                            margin-left: 15%;
                            width:6vw;
                            border:1px solid red;
                            border-radius: 10px;
                            background-color: red;
                            font-weight: bold;
                        }  









                        .hide{display: none;}
                        .show{display: block;} 












                        #flex_container{display: flex;
                                       flex-wrap: wrap;
                                       justify-content: space-between;
                                       margin-right: 2%;
                                       margin-left: 2%;
                                       margin-top: 8%;
                                       }
.flex_item{width: 20vw;
           min-height: 30vh;
           border:1px solid black;
          background-color: #E1F8DC;
          background-image: url(./cartoon_img.jpg);
          background-repeat: no-repeat;
          margin-top: 2%;
          border-radius: 10px;
         box-shadow:8px 10px 6px  white;
         box-sizing: border-box;
         position: relative;
       /* background-image: linear-gradient(to top,#33ccff,#ff99cc)*/} 


          .hide_container{/*display: flex;
                          flex-wrap: wrap;
                          justify-content: center;
                          align-items: center;
                                      */
                            position: absolute;
                            top: 25%;
                            left: 40%;
                            }                                   

.enjoy {width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  font-weight: bolder;
  background-color: white;
  color: black;
  border:none;
  font-size: x-large;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  /*background-image: radial-gradient(circle, red, yellow, green);*/
  position: absolute;
  bottom: 0;
  right: 16%;
}

.delete {
  width:25px;
  height: 25px;
  border-radius: 50%;
 /* background-image: radial-gradient(circle, red, yellow, green);
*/
  position: absolute;
  bottom: 0;
  right: 1%;
border:none;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background-color: white;
  color:black;
  font-size: large;
  box-sizing: border-box;
  

}


  
  .innerdiv{line-height:50px;
           }


   .center{display: flex;
    flex-wrap: wrap;
             justify-content: center;
             align-items: center;}


           

            .backbutton{color: white;
                  text-decoration: none;
                  background-color: black;
                   position: absolute;
                   left: 25%;
                   top:5%;
                    font-weight: bolder;
                    font-size: x-large;
                   
                    font-family: sans-serif;}



	}
