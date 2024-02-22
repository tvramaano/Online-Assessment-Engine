const defintions_index = {
                            online_assessment_engine: 0,
                            equations: 1,
                            linear_equation: 2,
                            gradient: 3,
                            y_intercept: 4,
                            x_intercept: 5,
                            graph_plane: 6,
                            decimals: 7,
                            online_assessment_engine_version: 8
                         }

const DEFINTIONS = [
                    {
                         subject: "INFORMATION", 
                         defintion: "The Online Assessment Engine is a platform used to present assessment questions and solutions "+
                                    "in the form of a step by step procedure and allocation of marks for each step. This engine is useful for educators when hosting online academic sessions to aid in preparing students "+
                                    "for their formal school assessments.",
                         example: setImage(
                                                imgName = "mtd_online_assessment_engine_example",
                                                idImg = "mtd_online_assessment_engine_example_id"
                                          )+
                                  "</br>The following illustration is a snapshot example of the Online Assessment Engine.",
                        related_terms: [
                                                {
                                                    term: "Current Version",
                                                    definitionIndex: defintions_index.online_assessment_engine_version
                                                }
                                                
                                       ] 
                    },
                   {
                        subject: "MATHEMATICS", 
                        defintion: "This refers to a mathematical statement where the expression expressed in the left hand side of the mathematical statement is equal to the expression expressed in the right hand side of the mathematical statement.",
                        example:"<span>"+ 
                                "Solve for x:</br></br>"+
                                 "2<i>x</i> -2 = 4</br>"+
                                 "2<i>x</i> = 4 + 2</br>"+
                                 "2<i>x</i> = 6</br>"+
                                 "<i>x</i> = 6/2</br>"+
                                 "<i>x</i> = 3</br></br>"+
                                 "The expression on the left hand side is equal to the expression on the right hand side when <i>x</i> = 3</br></br>"+
                                 "Left Hand Side: 2<i>x</i> 0 - 2 = 2(3) - 2 = 6 - 2 = 4</br>"+
                                 "Right Hand Side: 4"+
                                 "</span>",
                        related_terms: [
                                                   {
                                                        term: "Linear Equation",
                                                        definitionIndex: defintions_index.linear_equation
                                                   }
                                       ]
                   },
                   {
                        subject: "MATHEMATICS", 
                        defintion: "This is a type of equation where the highest power of the variable (in the case of the example <i>x</i>) is 1 (First-order equation). The form of the linear equation is a<i>y</i> = <i>bx</i> + <i>c</i> where <i>b</i> is the gradient (also known as the slope) and <i>c</i> is the y-intercept.",
                        example: "<span><i>y</i> = 4<i>x</i> -2 is an example of a linear equation</span>",
                        related_terms: [
                                                {
                                                        term: "Equations",
                                                        definitionIndex: defintions_index.equations
                                                },
                                                {
                                                  term: "Gradient (Slope)",
                                                  definitionIndex: defintions_index.gradient
                                                },
                                                {
                                                  term: "Y-intercept",
                                                  definitionIndex: defintions_index.y_intercept
                                                },
                                       ]
                   },
                   {
                    subject: "MATHEMATICS", 
                    defintion: "The gradient (also known as the slope) is the change in the <i>y</i> direction over the change in the <i>x</i> direction of a straight line. It represents the steepness of a straight line graph.",
                    example: setImage(
                                             imgName = "mtd_gradient",
                                             idImg = ""
                                    )+
                              "<br>This is an illustration of how to calculate the gradient of a straight line graph</br>"+
                              "<ul>"+
                              "<li>A straight line graph, represented as \"|\", has an undefined gradient because, from the equation above, <i>change in x</i> is equal to 0 making the solution to the equation undefined.</li>"+
                              "<li>A straight line graph, represented as \"_____\", has a gradient of 0 because, from the equation above, <i>change in y</i> is equal to 0 making the solution to the equation 0.</li>"+
                              "</ul>",
                    related_terms: [
                                            {
                                                    term: "Linear Equation",
                                                    definitionIndex: defintions_index.linear_equation
                                            }
                                   ]
                    },
                    {
                         subject: "MATHEMATICS", 
                         defintion: "The y-intercept of a graph is the point (s) in which the graph cuts the y-axis.",
                         example: setImage(
                                                  imgName = "mtd_y-intercept",
                                                  idImg = ""
                                         )+
                                   "<br>This is an illustration representing the y-intercept at point <i>y1</i>",
                         related_terms: [
                                                 {
                                                         term: "X-intercept",
                                                         definitionIndex: defintions_index.x_intercept
                                                 },
                                                 {
                                                       term: "Graph plane",
                                                       definitionIndex: defintions_index.graph_plane
                                                }
                                        ]
                    },
                    {
                         subject: "MATHEMATICS", 
                         defintion: "The x-intercept of a graph is the point (s) in which the graph cuts the x-axis.",
                         example: setImage(
                                                  imgName = "mtd_x-intercept",
                                                  idImg = ""
                                         )+
                                   "<br>This is an illustration representing the y-intercept at point <i>x1</i>",
                         related_terms: [
                                                 {
                                                         term: "Y-intercept",
                                                         definitionIndex: defintions_index.y_intercept
                                                 },
                                                 {
                                                       term: "Graph plane",
                                                       definitionIndex: defintions_index.graph_plane
                                                }
                                        ]
                    },
                    {
                         subject: "MATHEMATICS", 
                         defintion: "The graph plane consists of the x-axis, y-axis and z-axis each representing a direction.",
                         example: setImage(
                                                  imgName = "mtd_graph_plane",
                                                  idImg = ""
                                         )+
                                   "<br>This illustration represents 3 different graph planes for 1-Dimension (x direction only); 2-Dimension (x and y directions) and 3-Dimension (x, y and z directions)",
                         related_terms: [
                                                 {
                                                         term: "Y-intercept",
                                                         definitionIndex: defintions_index.y_intercept
                                                 },
                                                 {
                                                       term: "X-intercept",
                                                       definitionIndex: defintions_index.x_intercept
                                                }
                                        ]
                    },
                    {
                        subject: "MATHEMATICS", 
                        defintion: "This is a numerical value which uses exactly 1 comma (or a dot) to separate numbers within the aformentioned numerical value. "+
                                   "Updating the location of the comma (or dot) within the numerical value will have an influence on the weighting of the numerical value.",
                        example: "<ul>"+
                                 "<li>23.45 is a decimal number and has a greater weight as compared to 2.345</br>.</li>"+
                                 "<li>24,5 is a decimal number and has a lesser weight as compared to 74,5</li>"+
                                 "</ul>",
                        related_terms: []

                    },
                    {
                        subject: "INFORMATION", 
                        defintion: "This is the first version of the Online Assessment Engine. More features will be added in which the version will be updated accordingly. ",
                        example: "<span>THE FEATURES ON THIS VERSION INCLUDE:</span> </br>"+
                                 "<ul>"+
                                 "<li>Verify the solution entered by user</br></li>"+
                                 "<li>View definitions of certain underlined keywords which may be useful in finding the solution to the problem</br></li>"+
                                 "<li>View the solution in a step-by-step approach</br></li>"+
                                 "<li>View the full solution without the step-by-step approach</br></li>"+
                                 "<li>Provide hints to answer questions</br></li>"+
                                 "<li>Provide mark allocations for each question</br></li>"+
                                 "</ul>",
                        related_terms: [
                                             {
                                                        term: "Online Assessment Engine",
                                                        definitionIndex: defintions_index.online_assessment_engine
                                             }
                                       ]

                    }
                   
                    
] 

