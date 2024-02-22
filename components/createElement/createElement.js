function createElement(elementName,className,idName,onclick_action,onmouseover_action,onmouseout_action,content){
    let elementContainer = "";
        elementContainer += "<"+elementName+" ";
            elementContainer += "class = '"+className+"' ";
            elementContainer += "id = '"+idName+"' ";
            elementContainer += "onclick = '"+onclick_action+"' ";
            elementContainer += "onmouseover = '"+onmouseover_action+"' ";
            elementContainer += "onmouseout = '"+onmouseout_action+"' ";
        elementContainer += ">";

            elementContainer += content;
            

       elementContainer += "</"+elementName+">";
        

    return elementContainer;
}