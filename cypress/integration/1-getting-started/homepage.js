/// <reference types="cypress" />

describe("renders the home page", () =>{
    it("renders correctly", () =>{
          cy.visit("/")         
          cy.wait(4000)       
                 
         cy.title().should('include','Interaction Test');
         
          cy.get('canvas').click({ force: true });        
          
          // 1st column     
         
          cy.get('canvas').click(50, 50, { force: true })
          cy.get('canvas').click(50, 100, { force: true })
          cy.get('canvas').click(50, 200, { force: true })
          cy.get('canvas').click(50, 300, { force: true })
          cy.get('canvas').click(50, 400, { force: true })
          cy.get('canvas').click(50, 500, { force: true })
          cy.get('canvas').click(50, 550, { force: true })

         // 2nd column

          cy.get('canvas').click(150, 50, { force: true })
          cy.get('canvas').click(150, 100, { force: true })
          cy.get('canvas').click(150, 200, { force: true })
          cy.get('canvas').click(150, 300, { force: true })
          cy.get('canvas').click(150, 400, { force: true })
          cy.get('canvas').click(150, 500, { force: true })
          cy.get('canvas').click(150, 550, { force: true })
          
          //3rd column

          cy.get('canvas').click(250, 50, { force: true })
          cy.get('canvas').click(250, 100, { force: true })
          cy.get('canvas').click(250, 200, { force: true })
          cy.get('canvas').click(250, 300, { force: true })
          cy.get('canvas').click(250, 400, { force: true })
          cy.get('canvas').click(250, 500, { force: true })
          cy.get('canvas').click(250, 550, { force: true })

          //4th column

          cy.get('canvas').click(350, 50, { force: true })
          cy.get('canvas').click(350, 100, { force: true })
          cy.get('canvas').click(350, 200, { force: true })
          cy.get('canvas').click(350, 300, { force: true })
          cy.get('canvas').click(350, 400, { force: true })
          cy.get('canvas').click(350, 500, { force: true })
          cy.get('canvas').click(350, 550, { force: true })

          //5th column

          cy.get('canvas').click(450, 50, { force: true })
          cy.get('canvas').click(450, 100, { force: true })
          cy.get('canvas').click(450, 200, { force: true })
          cy.get('canvas').click(450, 300, { force: true })
          cy.get('canvas').click(450, 400, { force: true })
          cy.get('canvas').click(450, 500, { force: true })
          cy.get('canvas').click(450, 550, { force: true })

          //6th column

          cy.get('canvas').click(550, 50, { force: true })
          cy.get('canvas').click(550, 100, { force: true })
          cy.get('canvas').click(550, 200, { force: true })
          cy.get('canvas').click(550, 300, { force: true })
          cy.get('canvas').click(550, 400, { force: true })
          cy.get('canvas').click(550, 500, { force: true })
          cy.get('canvas').click(550, 550, { force: true })

          //7th column

          cy.get('canvas').click(650, 50, { force: true })
          cy.get('canvas').click(650, 100, { force: true })
          cy.get('canvas').click(650, 200, { force: true })
          cy.get('canvas').click(650, 300, { force: true })
          cy.get('canvas').click(650, 400, { force: true })
          cy.get('canvas').click(650, 500, { force: true })
          cy.get('canvas').click(650, 550, { force: true })

          //8th column

          cy.get('canvas').click(750, 50, { force: true })
          cy.get('canvas').click(750, 100, { force: true })
          cy.get('canvas').click(750, 200, { force: true })
          cy.get('canvas').click(750, 300, { force: true })
          cy.get('canvas').click(750, 400, { force: true })
          cy.get('canvas').click(750, 500, { force: true })
          cy.get('canvas').click(750, 550, { force: true })

         // Clicking in entire page to find click button in not a good practice.
         // we can use for loop once click button found stop clicking any more.
          

         // code example -  if CLICK HERE button is fixed in one place

          cy.get('canvas').then($canvas => {
              const canvasWidth = $canvas.width();
              const canvasHeight = $canvas.height();

              const canvasCenterX = canvasWidth /2;
              const canvasCentreY = canvasHeight /2;

              cy.wrap($canvas)
                .scrollIntoView()
                .click(canvasCenterX, canvasCentreY)

           })    
          })
        })  
                 
