import {
  Archive,
  Bell,
  Bookmark,
  Edit,
  GitCommit,
  MessageCircle,
  MoreHorizontal,
  PhoneCall,
  Printer,
  Save,
  Server,
  Trash,
  TrendingDown,
  TrendingUp
} from 'react-feather';
import {
  Avatar,
  Card,
  Col,
  DatePicker,
  Dropdown,
  List,
  Menu,
  Message,
  Progress,
  Row,
  Timeline
} from 'antd';
import {
  DiscreteColorLegend,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import NoSSR from 'react-no-ssr';
import PostCard from './shared/PostCard';
import StatCard from './shared/StatCard';
import WeatherCard from './shared/WeatherCard';
import styled from 'styled-components';
import { theme } from './styles/GlobalStyles';

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  .rv-discrete-color-legend {
    display: inline-block;
    width: auto !important;
  }
  .rv-discrete-color-legend-item {
    padding-top: 0;
    padding-bottom: 0;
  }
`;


const Overview = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Campaigns"
            value={103}
            icon={<Bookmark size={20} strokeWidth={1} />}
            color={theme.primaryColor}
            clickHandler={() => Message.info('Campaign stat button clicked')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Customers"
            value={230}
            icon={<PhoneCall size={20} strokeWidth={1} />}
            color={theme.darkColor}
            clickHandler={() => Message.info('Customers stat button clicked')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Queries"
            value={323}
            icon={<Bell size={20} strokeWidth={1} />}
            color={theme.warningColor}
            clickHandler={() => Message.info('Queries stat button clicked')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Opens"
            value={870}
            icon={<MessageCircle size={20} strokeWidth={1} />}
            color={theme.errorColor}
            clickHandler={() => Message.info('Opens stat button clicked')}
          />
        </Col>
      </Row>

     
    </div>
  );
};

export default Overview;
