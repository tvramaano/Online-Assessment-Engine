const SET_TARGET = "_blank";

const showStatus = {
						show: "block",
						hide: "none"
				   }

const COLOURS = {
                        green: "rgb(0,255,0)",
                        red: "rgb(255,0,0)",
                        light_color: "rgb(255,255,255)",
                        dark_color: "rgb(0,0,0)"
                }

const PAGES = {
					home_page: 0
			  }	


function start_page(header_title,header_img,header_bottom){
	getElement(
        elementName = "header_id"
		).innerHTML = createHeader(
						header_title =  header_title,
						header_img = header_img,
                        header_bottom = header_bottom
					) 
	createFooter()
	
}

function updatePage(page_number){
	switch (page_number) {
		case PAGES.home_page:{
           
            start_page(
							header_title = "Practice Assessments using our State of the Art <span>Interactive</span> "+
                                           "<span>Online Assessment Engine</span>",
							header_img = "app_icon",
                            header_bottom = dictionary_link("Online Assessment Engine Info",defintions_index.online_assessment_engine),
			)
			getElement(
						elementName = "page_id"
		    ).innerHTML = createHomePage()
            display_worked_out_solutions(
                arr = DEMO_ASSESSMENT_CONTENT,
                solution_arr_lines = DEMO_ASSESSMENT_LINES_ARR,
            )
			hide_solutions(
				arr = DEMO_ASSESSMENT_CONTENT,
				idname = "solution_"
		  )
		  
		}break;

		
	
		
	}
}


function getElement(elementName){
	return document.getElementById(elementName);
}

function navigateToExternal(navigate_to_link,isExternal){
	switch(isExternal){
		case true:{
			window.open(navigate_to_link,SET_TARGET);
		}break;
		case false:{
			window.location.href = navigate_to_link
		}break;
	}
	
	
}


function random_number(min_num,max_num){

    return  Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;

}


