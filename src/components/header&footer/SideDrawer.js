import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

function SideDrawer(props) {
  const list = [
    { where: "featured", value: "To top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];
  const scrollToElement = (element) =>{
    scroller.scrollTo(element,{
      durarion:1500,
      delay:100,
      smooth: true,
      offset:-150
    })
    props.onClose(false)
  }
  const renderItem = (item) =>{
      return <ListItem button key={item.where}
      onClick={()=>scrollToElement(item.where)}
      >{item.value}</ListItem>
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav" >
        {list.map((item) => renderItem(item))}
      </List>
    </Drawer>
  );
}

export default SideDrawer;
