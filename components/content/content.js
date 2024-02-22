const NEGATIVE_COMMENTS = [
                            "Oh no; try again.",
                            "Not quite, try again.",
                            "unfortnately, that is incorrect, try again.",
                            "Incorrect, keep at it and try again.",
                            "Do not give up just yet, try again."
                          ]

const POSTIVE_COMMENTS = [
                            "Way to go!!",
                            "That is CORRECT!! Well Done!!",
                            "Nice Work!",
                            "Very Well Done!",
                            "You have got the correct answer!"
                          ]                        
const DEMO_ASSESSMENT_LINES_ARR = [
                        [
                            {
                                actual_solution: "2x<sup>1</sup> + 35x<sup>1</sup> - 2x<sup>0</sup> = 7x<sup>1</sup>",
                                solution_explaination: "Note: any value(variable) raised to the power 0 is 1. Hence 2 = 2x<sup>0</sup>"
                            },
                            {
                                actual_solution: "2x<sup>1</sup> + 35x<sup>1</sup> - 7x<sup>1</sup> = +2x<sup>0</sup>",
                                solution_explaination: "Group similar terms together. In this case, place all values with x<sup>0</sup> on one side and x<sup>1</sup> on another side"
                            },
                            {
                                actual_solution: "30x<sup>1</sup> = +2x<sup>0</sup> "+setImage(imgName ="mtd_check_mark_icon",idImg = ""),
                                solution_explaination: "Perform the basic arithemtic operations <span>(1 mark)</span>"
                            },
                            {
                                actual_solution: "x = 2/30",
                                solution_explaination: "Divide both sides by 30"
                            },
                            {
                                actual_solution: "x = 0.07 "+setImage(imgName ="mtd_check_mark_icon",idImg = ""),
                                solution_explaination: "Final answer to the nearest two decimal places <span>(1 mark)</span>"
                            },
                        ],
                        [
                                {
                                        actual_solution: "7x<sup>1</sup> - 14x<sup>1</sup> - 7x<sup>0</sup> = 7x<sup>1</sup>",
                                        solution_explaination: "Note: any value(variable) raised to the power 0 is 1. Hence 7 = 7x<sup>0</sup>"
                                    },
                                    {
                                        actual_solution: "7x<sup>1</sup> - 14x<sup>1</sup> - 7x<sup>1</sup> = - 7x<sup>0</sup>",
                                        solution_explaination: "Group similar terms together. In this case, place all values with x<sup>0</sup> on one side and x<sup>1</sup> on another side"
                                    },
                                    {
                                        actual_solution: "-14x<sup>1</sup> = 7x<sup>0</sup> "+setImage(imgName ="mtd_check_mark_icon",idImg = ""),
                                        solution_explaination: "Perform the basic arithemtic operations <span>(1 mark)</span>"
                                    },
                                    {
                                        actual_solution: "x = -7/14",
                                        solution_explaination: "Divide both sides by -14"
                                    },
                                    {
                                        actual_solution: "x = -0.50 "+setImage(imgName ="mtd_check_mark_icon",idImg = ""),
                                        solution_explaination: "Final answer to the nearest two decimal places <span>(1 mark)</span>"
                                    },  
                        ]
                                

                        
                  ]
const DEMO_ASSESSMENT_CONTENT = {
                                    assessment_id: 1,
                                    examiner: createToolTip(tooltip_element = dictionary_link("Online Assessment Engine",defintions_index.online_assessment_engine),toolltip_text = "View info",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = ""),
                                    moderator: createToolTip(tooltip_element = dictionary_link("Online Assessment Engine",defintions_index.online_assessment_engine),toolltip_text = "View info",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = ""),
                                    total_marks: 4,
                                    assessment_title: "Mathematics Demo Assessment: <span>Equations</span>",
                                    assessment_info: "This mathematics assessment  is a demo assessment and is meant to introduce students and educators to the "+
                                    createToolTip(tooltip_element = dictionary_link("Online Assessment Engine",defintions_index.online_assessment_engine),toolltip_text = "View info",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+". Students and educators can use this assessment to get acquainted with the "+ 
                                    createToolTip(tooltip_element = dictionary_link("Online Assessment Engine",defintions_index.online_assessment_engine),toolltip_text = "View info",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+" environment and the benefits it brings to improving learning. This demo assessment consists of 2 questions on the topic of "+createToolTip(tooltip_element = dictionary_link("Equations",defintions_index.equations),toolltip_text = "View definition",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+".",
                                    assessment_questions: [
                                                                {
                                                                    assessment_marks: 2,
                                                                    hint: "Ensure you subsitute your final answer for <i>x</i> back into the equations (Left hand side equation and right hand side equation) to check that your solution is correct",
                                                                    question: "Solve for <i>x</i> for the following "+createToolTip(tooltip_element = dictionary_link("Linear Equation",defintions_index.linear_equation),toolltip_text = "View definition",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+" to the nearest 2 " +createToolTip(tooltip_element = dictionary_link("Decimal",defintions_index.decimals),toolltip_text = "View definition",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+" places.</br></br> 2x + 35x - 2 = 7x",
                                                                    solution: ["2/30","1/15","0.07"],
                                                                    solution_line_number: -5
                                                                },
                                                                {
                                                                    assessment_marks: 2,
                                                                    hint: "Ensure you subsitute your final answer for <i>x</i> back into the equations (Left hand side equation and right hand side equation) to check that your solution is correct",
                                                                    question: "Solve for <i>x</i> for the following "+createToolTip(tooltip_element = dictionary_link("Linear Equation",defintions_index.linear_equation),toolltip_text = "View definition",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+" to the nearest 2 " +createToolTip(tooltip_element = dictionary_link("Decimal",defintions_index.decimals),toolltip_text = "View definition",tooltip_position = TOOLTIP_POSITION.bottom,tooltip_button_width = "")+" places.</br></br> 7x - 14x - 7 = 7x",
                                                                    solution: ["-0.5","-0.50","-1/2","-7/14"],
                                                                    solution_line_number: -5
                                                                }
                                                                
                                                          ],
                                    
                            }
                           
function createContentCard(solution_lines_arr,arr){
    let assessment_area = "";

    assessment_area += createElement(
                                        elementName = "section",
                                        className = "content_card_assessment_header_details",
                                        idName = "",
                                        onclick_action = "",
                                        onmouseover_action = "",
                                        onmouseout_action = "",
                                        content = createElement(
                                                                    elementName = "section",
                                                                    className = "content_card_assessment_header_details_section",
                                                                    idName = "",
                                                                    onclick_action = "",
                                                                    onmouseover_action = "",
                                                                    onmouseout_action = "",
                                                                    content = createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_title",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = "Examiner:"
                                                                                            )+
                                                                            createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_content",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = arr.examiner
                                                                                            )
                                                               )+
                                                createElement(
                                                                    elementName = "section",
                                                                    className = "content_card_assessment_header_details_section",
                                                                    idName = "",
                                                                    onclick_action = "",
                                                                    onmouseover_action = "",
                                                                    onmouseout_action = "",
                                                                    content = createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_title",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = "Moderator:"
                                                                                            )+
                                                                            createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_content",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = arr.moderator
                                                                                            )
                                                               )+
                                                createElement(
                                                                    elementName = "section",
                                                                    className = "content_card_assessment_header_details_section",
                                                                    idName = "",
                                                                    onclick_action = "",
                                                                    onmouseover_action = "",
                                                                    onmouseout_action = "",
                                                                    content = createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_title",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = "Total:"
                                                                                            )+
                                                                            createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_assessment_header_details_section_content",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = arr.total_marks + " marks"
                                                                                            )
                                                               )
                                    )

    assessment_area += createElement(
                                            elementName = "section",
                                            className = "content_card_title",
                                            idName = "",
                                            onclick_action = "",
                                            onmouseover_action = "",
                                            onmouseout_action = "",
                                            content = createElement(
                                                                            elementName = "section",
                                                                            className = "content_card_title_rectangle",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = ""
                                                                    )+
                                                                    arr.assessment_title
                                    )
    assessment_area += createElement(
                                            elementName = "section",
                                            className = "content_card_info",
                                            idName = "",
                                            onclick_action = "",
                                            onmouseover_action = "",
                                            onmouseout_action = "",
                                            content = arr.assessment_info
                                    )
    for (let i = 0; i < arr.assessment_questions.length; i++) {

        assessment_area += createElement(
                                            elementName = "section",
                                            className = "content_card_container",
                                            idName = "",
                                            onclick_action = "",
                                            onmouseover_action = "",
                                            onmouseout_action = "",
                                            content = createElement(
                                                                            elementName = "section",
                                                                            className = "content_card_question_container",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = createElement(
                                                                                                            elementName = "section",
                                                                                                            className = "content_card_question_section",
                                                                                                            idName = "",
                                                                                                            onclick_action = "",
                                                                                                            onmouseover_action = "",
                                                                                                            onmouseout_action = "",
                                                                                                            content = "Question "+(i+1)
                                                                                                    )+
                                                                                       createElement(
                                                                                                            elementName = "section",
                                                                                                            className = "content_card_question_section text_align_right",
                                                                                                            idName = "",
                                                                                                            onclick_action = "",
                                                                                                            onmouseover_action = "",
                                                                                                            onmouseout_action = "",
                                                                                                            content = arr.assessment_questions[i].assessment_marks + " marks"
                                                                                                    )
                                                                                        
                                                                    )+
                                                                    createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_question_container_hint",
                                                                        idName = "",
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_question_container_hint_icon",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = ""
                                                                                                )+
                                                                                createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_question_container_hint_text",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = arr.assessment_questions[i].hint
                                                                                                )
                                                                    )+
                                                       createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_question_text",
                                                                        idName = "",
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = arr.assessment_questions[i].question
                                                                    )+
                                                       createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_solution",
                                                                        idName = "",
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_solution_left",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content = "<input "+
                                                                                                                        "type = 'text' "+
                                                                                                                        "id = 'txt_solution_"+arr.assessment_id+""+i+"' "+
                                                                                                                        "placeholder = 'Enter solution here' "+
                                                                                                                "/>"+
                                                                                                                createElement(
                                                                                                                                elementName = "section",
                                                                                                                                className = "content_card_solution_left_desktop",
                                                                                                                                idName = "",
                                                                                                                                onclick_action = "",
                                                                                                                                onmouseover_action = "",
                                                                                                                                onmouseout_action = "",
                                                                                                                                content = create_button(
                                                                                                                                                                button_name = button_properties[button_index.verify_btn_index].button_name[0],
                                                                                                                                                                onclick_action = "verify_solution(arr,"+i+")",
                                                                                                                                                                button_id = button_properties[button_index.verify_btn_index].button_id
                                                                                                                                                        )
                                                                                                                )+
                                                                                                                createElement(
                                                                                                                                elementName = "section",
                                                                                                                                className = "content_card_solution_left_mobile",
                                                                                                                                idName = "",
                                                                                                                                onclick_action = "",
                                                                                                                                onmouseover_action = "",
                                                                                                                                onmouseout_action = "",
                                                                                                                                content = create_button(
                                                                                                                                                                button_name = button_properties[button_index.verify_btn_index].button_name[1],
                                                                                                                                                                onclick_action = "verify_solution(arr,"+i+")",
                                                                                                                                                                button_id = button_properties[button_index.verify_btn_index].button_id
                                                                                                                                                        )
                                                                                                                )
                                                                                                                
                                                                                                )+
                                                                                 createElement(
                                                                                                    elementName = "section",
                                                                                                    className = "content_card_solution_right",
                                                                                                    idName = "",
                                                                                                    onclick_action = "",
                                                                                                    onmouseover_action = "",
                                                                                                    onmouseout_action = "",
                                                                                                    content =  createElement(
                                                                                                                                            elementName = "section",
                                                                                                                                            className = "content_card_solution_left_desktop",
                                                                                                                                            idName = "",
                                                                                                                                            onclick_action = "",
                                                                                                                                            onmouseover_action = "",
                                                                                                                                            onmouseout_action = "",
                                                                                                                                            content = create_button(
                                                                                                                                                                            button_name = button_properties[button_index.view_solution_btn_index].button_name[0],
                                                                                                                                                                            onclick_action = "view_full_solution(solution_lines_arr,arr,"+i+",\""+showStatus.show+"\",\"\")",
                                                                                                                                                                            button_id = ""
                                                                                                                                                                    )
                                                                                                                            )+
                                                                                                            createElement(
                                                                                                                                            elementName = "section",
                                                                                                                                            className = "view_full_solution_mobile",
                                                                                                                                            idName = "",
                                                                                                                                            onclick_action = "",
                                                                                                                                            onmouseover_action = "",
                                                                                                                                            onmouseout_action = "",
                                                                                                                                            content = create_button(
                                                                                                                                                                            button_name = button_properties[button_index.view_solution_btn_index].button_name[1],
                                                                                                                                                                            onclick_action = "view_full_solution(solution_lines_arr,arr,"+i+",\""+showStatus.show+"\",\"\")",
                                                                                                                                                                            button_id = ""
                                                                                                                                                                    )
                                                                                                                            )+

                                                                                                            createElement(
                                                                                                                                            elementName = "section",
                                                                                                                                            className = "refresh_button",
                                                                                                                                            idName = "",
                                                                                                                                            onclick_action = "",
                                                                                                                                            onmouseover_action = "",
                                                                                                                                            onmouseout_action = "",
                                                                                                                                            content = create_button(
                                                                                                                                                                            button_name = button_properties[button_index.refresh_index].button_name,
                                                                                                                                                                            onclick_action = "view_full_solution(solution_lines_arr,arr,"+i+",\""+showStatus.hide+"\",\"\")",
                                                                                                                                                                            button_id = ""
                                                                                                                                                                    )
                                                                                                                            )+
                                                                                                    
                                                                                                             create_button(
                                                                                                                                    button_name = button_properties[button_index.move_btn_index].button_name[0],
                                                                                                                                    onclick_action = "view_full_solution(solution_lines_arr,arr,"+i+",\""+showStatus.show+"\",true)",
                                                                                                                                    button_id = button_properties[button_index.move_btn_index].button_id[0]
                                                                                                                            )+
                                                                                                             create_button(
                                                                                                                                    button_name = button_properties[button_index.move_btn_index].button_name[1],
                                                                                                                                    onclick_action = "view_full_solution(solution_lines_arr,arr,"+i+",\""+showStatus.show+"\",false)",
                                                                                                                                    button_id = button_properties[button_index.move_btn_index].button_id[1]
                                                                                                                            )
                                                                                                             
                                                                                                )
                                                                                  
                                                                    )+
                                                       createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_worked_out_solution",
                                                                        idName = "solution_"+arr.assessment_id+""+i,
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = ""
                                                                    )+
                                                       createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_question_container_output_top",
                                                                        idName = "",
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = ""
                                                                )+
                                                    createElement(
                                                                        elementName = "section",
                                                                        className = "content_card_question_container_output",
                                                                        idName = "output_"+arr.assessment_id+""+i,
                                                                        onclick_action = "",
                                                                        onmouseover_action = "",
                                                                        onmouseout_action = "",
                                                                        content = "Begin working through the solution"
                                                                )
                                                        
                                       )
        
    }

    
    return assessment_area;
    
}

function create_worked_out_solution(arr,solution_arr_lines,solution_nr,solution_line_nr){
        let worked_out_solution = "";

        worked_out_solution += "<table>";
        if (solution_line_nr < solution_arr_lines[solution_nr].length && solution_line_nr >= -1) {
            arr.assessment_questions[solution_nr].solution_line_number = solution_line_nr;
        }
        
            for (let i = 0; i <=  arr.assessment_questions[solution_nr].solution_line_number; i++) {
                worked_out_solution += createElement(
                                                        elementName = "tr",
                                                        className = "",
                                                        idName = "",
                                                        onclick_action = "",
                                                        onmouseover_action = "",
                                                        onmouseout_action = "",
                                                        content = createElement(
                                                                                        elementName = "th",
                                                                                        className = "",
                                                                                        idName = "",
                                                                                        onclick_action = "",
                                                                                        onmouseover_action = "",
                                                                                        onmouseout_action = "",
                                                                                        content = solution_arr_lines[solution_nr][i].actual_solution
                                                                                )+
                                                                createElement(
                                                                                        elementName = "td",
                                                                                        className = "",
                                                                                        idName = "",
                                                                                        onclick_action = "",
                                                                                        onmouseover_action = "",
                                                                                        onmouseout_action = "",
                                                                                        content = solution_arr_lines[solution_nr][i].solution_explaination
                                                                                )
                                                )
                
            }

             worked_out_solution += "</table>";


        return worked_out_solution;
}

function dictionary_link(term,definitionIndex){
    return createElement(
                            elementName = "span",
                            className = "dictionary_link",
                            idName = "",
                            onclick_action = "openDictionaryBox(term = \""+term+"\",definitionIndex = "+definitionIndex+",isOpen = false)",
                            onmouseover_action = "",
                            onmouseout_action = "",
                            content = term
            )
}

function openDictionaryBox(term,definitionIndex,isOpen){

    switch(isOpen){
        case true:{
             getElement(
                elementName = "dictionary_box_id"
            ).innerHTML = ""
            getElement(
                elementName = "main_body_id"
            ).style.overflowY = "scroll"
          
            
        }break;
        case false:{
             getElement(
                        elementName = "dictionary_box_id"
                      ).innerHTML = dictionary_box(term = term,definitionIndex = definitionIndex)
            getElement(
                         elementName = "main_body_id"
            ).style.overflowY = "hidden"
        }break;
    }
  
}

function dictionary_box(term,definitionIndex){
    return  createElement(
                                                elementName = "section",
                                                className = "dictionary_box_container",
                                                idName = "",
                                                onclick_action = "",
                                                onmouseover_action = "",
                                                onmouseout_action = "",
                                                content = createElement(
                                                                            elementName = "section",
                                                                            className = "dictionary_box_header",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = createElement(
                                                                                                        elementName = "section",
                                                                                                        className = "dictionary_box_header_heading",
                                                                                                        idName = "",
                                                                                                        onclick_action = "",
                                                                                                        onmouseover_action = "",
                                                                                                        onmouseout_action = "",
                                                                                                        content = term
                                                                                                    )+
                                                                                    createElement(
                                                                                                        elementName = "section",
                                                                                                        className = "dictionary_box_header_close_icon",
                                                                                                        idName = "",
                                                                                                        onclick_action = "openDictionaryBox(term = \"\",definitionIndex = 0,isOpen = true)",
                                                                                                        onmouseover_action = "",
                                                                                                        onmouseout_action = "",
                                                                                                        content = ""

                                                                                                    )
                                                                        )+
                                                        createElement(
                                                                            elementName = "section",
                                                                            className = "dictionary_box_subject",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = DEFINTIONS[definitionIndex].subject
                                                                    )+
                                                        createElement(
                                                                            elementName = "section",
                                                                            className = "dictionary_box_content",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = DEFINTIONS[definitionIndex].defintion
                                                                    )+
                                                        createElement(
                                                                            elementName = "section",
                                                                            className = "dictionary_box_example",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = DEFINTIONS[definitionIndex].example
                                                                    )+
                                                        createElement(
                                                                            elementName = "section",
                                                                            className = "dictionary_box_related",
                                                                            idName = "",
                                                                            onclick_action = "",
                                                                            onmouseover_action = "",
                                                                            onmouseout_action = "",
                                                                            content = populate_related_terms(
                                                                                                                definitionIndex1 = definitionIndex
                                                                                                            )
                                                                            
                                                                            
                                                                    )
                                            
        )
    
    
    
    
}

function populate_related_terms(definitionIndex1){
    let related_terms = "";
    
    for (let j = 0; j < DEFINTIONS[definitionIndex1].related_terms.length; j++) {
            related_terms += dictionary_link(
                                                term = DEFINTIONS[definitionIndex1].related_terms[j].term,
                                                definitionIndex = DEFINTIONS[definitionIndex1].related_terms[j].definitionIndex
                                            )
              
        }
       
    
    return related_terms;
}

function hide_solutions(arr,idname){
    for (let i = 0; i < arr.assessment_questions.length; i++) {
        getElement(
                    elementName = idname+""+arr.assessment_id+""+i
                  ).style.display = showStatus.hide
        
    }
}

function view_full_solution(solution_arr,arr,selected_index,show_status,isUpButton){

    let current_solution_line_number = arr.assessment_questions[selected_index].solution_line_number;

    switch (isUpButton) {
        case true:{
            if (current_solution_line_number  > -1) {
                current_solution_line_number--; 
            }
         }break;
        case false:{
            if (current_solution_line_number  <  solution_arr[selected_index].length - 1) {
                current_solution_line_number++; 
            } 
        }break;
        default:{
            current_solution_line_number = solution_arr[selected_index].length - 1;
        }break;
    }

    switch (show_status) {
        case showStatus.show:{
            getElement(
                elementName = "solution_"+arr.assessment_id+""+selected_index
              ).innerHTML = create_worked_out_solution(
                                                            arr = arr,
                                                            solution_arr_lines = solution_arr,
                                                            solution_nr = selected_index,
                                                            solution_line_nr = current_solution_line_number
            
                                                            )

            
            getElement(
                elementName = "solution_"+arr.assessment_id+""+selected_index
              ).style.display = showStatus.show;
           

            

              if(current_solution_line_number == -1){
                getElement(
                    elementName = "solution_"+arr.assessment_id+""+selected_index
                  ).style.display = showStatus.hide;

                  getElement(
                    elementName = "output_"+arr.assessment_id+""+selected_index
                  ).innerHTML = "Solution has closed";
               }
               else{
                     getElement(
                        elementName = "output_"+arr.assessment_id+""+selected_index
                    ).innerHTML = "Line " + (current_solution_line_number + 1) + ": "+solution_arr[selected_index][current_solution_line_number].solution_explaination;
               }
            

        } break;
    
        case showStatus.hide:{
            current_solution_line_number = -1;
             getElement(
                elementName = "solution_"+arr.assessment_id+""+selected_index
              ).innerHTML = create_worked_out_solution(
                                                            arr = arr,
                                                            solution_arr_lines = solution_arr,
                                                            solution_nr = selected_index,
                                                            solution_line_nr = current_solution_line_number
                                                      )
            getElement(
                elementName = "solution_"+arr.assessment_id+""+selected_index
              ).style.display = showStatus.hide

            getElement(
                elementName = "output_"+arr.assessment_id+""+selected_index
              ).innerHTML = "A refresh operation has been performed for question "+(selected_index+1)
            getElement(
                           elementName = "txt_solution_"+arr.assessment_id+""+selected_index
                      ).style.backgroundColor = COLOURS.light_color;
            getElement(
                           elementName = "txt_solution_"+arr.assessment_id+""+selected_index
                      ).style.color = COLOURS.dark_color;
             getElement(
                           elementName = "txt_solution_"+arr.assessment_id+""+selected_index
                      ).value= "";
           
            

        } break;
    }

   
       
}

function verify_solution(arr,selected_index){

    let txt_solution = getElement(
                                        elementName = "txt_solution_"+arr.assessment_id+""+selected_index
                                 ) 
    let isSolutionPresent = false;
     for (let j = 0; j < arr.assessment_questions[selected_index].solution.length; j++) {
        if (txt_solution.value == arr.assessment_questions[selected_index].solution[j]) {
              isSolutionPresent = true;
              break;
       }
        
    }

    if (isSolutionPresent) {
        let positive_comment_index = random_number(0,POSTIVE_COMMENTS.length-1);
        getElement(
            elementName = "output_"+arr.assessment_id+""+selected_index
          ).innerHTML = POSTIVE_COMMENTS[positive_comment_index]
          txt_solution.style.backgroundColor = COLOURS.green;
          txt_solution.style.color = COLOURS.dark_color;
    }
    else{
        let negative_comment_index = random_number(0,NEGATIVE_COMMENTS.length-1);
            getElement(
                elementName = "output_"+arr.assessment_id+""+selected_index
              ).innerHTML = NEGATIVE_COMMENTS[negative_comment_index];
             txt_solution.style.backgroundColor = COLOURS.red;
             txt_solution.style.color = COLOURS.light_color
    }
    

}

function display_worked_out_solutions(arr,solution_arr_lines){
    
    for (let i = 0; i < arr.assessment_questions.length; i++) {
        getElement(
            elementName = "solution_"+arr.assessment_id+""+i
          ).innerHTML = create_worked_out_solution(
                                                        arr = arr,
                                                        solution_arr_lines = solution_arr_lines,
                                                        solution_nr = i,
                                                        solution_line_nr = -1
                                                  )
        
    }
   
    
}