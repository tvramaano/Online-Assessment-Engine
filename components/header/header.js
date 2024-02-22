function createHeader(header_title,header_img_name,header_bottom){

      return  createElement(
                                elementName = "section",
                                className = "",
                                idName = "dictionary_box_id",
                                onclick_action = "",
                                onmouseover_action = "",
                                onmouseout_action = "",
                                content = ""
                             )+
               createElement(
                            elementName = "section",
                            className = "header_container",
                            idName = "",
                            onclick_action = "",
                            onmouseover_action = "",
                            onmouseout_action = "",
                            content = createElement(
                                                        elementName = "section",
                                                        className = "header_half",
                                                        idName = "",
                                                        onclick_action = "",
                                                        onmouseover_action = "",
                                                        onmouseout_action = "",
                                                        content = setImage(
                                                                                imgName = header_img_name,
                                                                                idImg = ""
                                                                        )
                                                )+ 
                                    createElement(
                                                        elementName = "section",
                                                        className = "header_half",
                                                        idName = "",
                                                        onclick_action = "",
                                                        onmouseover_action = "",
                                                        onmouseout_action = "",
                                                        content = createElement(
                                                                                elementName = "h1",
                                                                                className = "header_title",
                                                                                idName = "",
                                                                                onclick_action = "",
                                                                                onmouseover_action = "",
                                                                                onmouseout_action = "",
                                                                                content = header_title
                                                                               
                                                                            )
                                                                                            
                                                )+
                                    createElement(
                                                         elementName = "section",
                                                         className = "link_button",
                                                         idName = "",
                                                         onclick_action = "",
                                                         onmouseover_action = "",
                                                         onmouseout_action = "",
                                                         content = header_bottom
                                                )
                                    
                            
                            
                                
                                
                        )
                        
                 
}

