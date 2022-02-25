import './sidebar.css';
import {
  HomeOutlined,
  Timeline,
  TrendingUp,
  PersonOutlineOutlined,
  StorefrontOutlined,
  AttachMoneyOutlined,
  BarChartOutlined,
  MailOutlineOutlined,
  DynamicFeedOutlined,
  ChatBubbleOutline,
  WorkOutlineOutlined,
  ReportOutlined,
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>dashboard</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listitem'>
              <HomeOutlined className='sidebar-icon' /> home
            </li>
            <li className='sidebar-listitem'>
              <Timeline className='sidebar-icon' /> analytics
            </li>
            <li className='sidebar-listitem'>
              <TrendingUp className='sidebar-icon' /> sales
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>quick menu</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listitem'>
              <PersonOutlineOutlined className='sidebar-icon' /> users
            </li>
            <li className='sidebar-listitem'>
              <StorefrontOutlined className='sidebar-icon' /> products
            </li>
            <li className='sidebar-listitem'>
              <AttachMoneyOutlined className='sidebar-icon' /> transactions
            </li>
            <li className='sidebar-listitem'>
              <BarChartOutlined className='sidebar-icon' /> reports
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>notifications</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listitem'>
              <MailOutlineOutlined className='sidebar-icon' /> mail
            </li>
            <li className='sidebar-listitem'>
              <DynamicFeedOutlined className='sidebar-icon' /> messages
            </li>
            <li className='sidebar-listitem'>
              <ChatBubbleOutline className='sidebar-icon' /> feedback
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>staff</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listitem'>
              <WorkOutlineOutlined className='sidebar-icon' /> manage
            </li>
            <li className='sidebar-listitem'>
              <Timeline className='sidebar-icon' /> analytics
            </li>
            <li className='sidebar-listitem'>
              <ReportOutlined className='sidebar-icon' /> reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
