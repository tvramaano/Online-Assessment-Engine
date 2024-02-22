const button_index = {
                        get_a_tutor_btn_index: 0,
                        mtd_socials_btn_index: 1,
                        verify_btn_index: 2,
                        view_solution_btn_index: 3,
                        move_btn_index: 4,
                        refresh_index: 5
                     }


const button_properties = [
    {
        button_name: "Get A Tutor", 
        onclick_action: "navigateToExternal(navigate_to_link = EXTERNAL_LINKS.request_tutor_external_link,isExternal = true)",
        button_id: ""
    },
    {
        button_name: ["in"], 
        onclick_action: ["navigateToExternal(navigate_to_link = PAGE_LINKS.linkedin_external_link,isExternal = true)"],
        button_id: ""
    },
    {
        button_name: ["Verify Solution",""], 
        onclick_action: "",
        button_id: ""
    },
    {
        button_name: ["View Full Solution",""], 
        onclick_action: "",
        button_id: ""
    },
    {
        button_name:   [
                            setImage(imgName = "mtd_up_icon",idImg = ""),
                            setImage(imgName = "mtd_down_icon",idImg = ""),
                       ], 
        onclick_action: "",
        button_id: [
                        "up_id",
                        "down_id"
                   ]
    },
    {
        button_name: "", 
        onclick_action: "",
        button_id: ""
    },
   
  
 ]




 function create_button(button_name,onclick_action,button_id){
   
   return createElement(
                                 elementName = "button",
                                 className = "button_container",
                                 idName = button_id,
                                 onclick_action = onclick_action,
                                 onmouseover = "",
                                 onmouseout = "",
                                 content = button_name

                        )
   
  
}   


  
 
