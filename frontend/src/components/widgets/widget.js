import "./widget.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StraightIcon from '@mui/icons-material/Straight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InventoryIcon from '@mui/icons-material/Inventory';

const Widget = ({ type }) => {
   let data;
   switch(type){
     case "Truck":
        data={
            title:"NO.OF.TRUCKS",
            value:"1",
            icon:<LocalShippingIcon className="icon" 
            style={{color:"crimson",
            backgroundColor:"rgba(255, 0, 0, 0.2)", }} />
        };
      break;
      case "Coal":
        data={
            title:"AMOUNT OF COAL",
            value:"23.5 tonnes",
            icon:<InventoryIcon className="icon"
            style={{color:"goldenrod",
            backgroundColor:"rgba(218, 165, 32, 0.2)", }} />
        };
      break;
      case "Distance":
        data={
            title:"TOTAL DISTANCE",
            value:"1476 kms",
            icon:<StraightIcon className="icon" 
            style={{color:"green",
            backgroundColor:"rgba(0, 128, 0, 0.2)", }} />
        };
      break;
      case "Duration":
        data={
            title:"EXPECTED DURATION",
            value:"26 Hrs",
            icon:<AccessTimeIcon className="icon" 
            style={{color:"purple",
            backgroundColor:"rgba(128, 0, 128, 0.2)", }} />
        };
      break;
      default:
        break;
   }




  return (
    <div className="widget">
        <div className="widgetleft">
            {data.icon}
        </div>
        <div className="widgetright">
            <span className="title">{data.title}</span>
            <span className="value">{data.value}</span>
        </div>
    </div>
  )
}

export default Widget