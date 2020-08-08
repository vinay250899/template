import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  {
    path: '/',
    name: 'Home',
    icon: <Home strokeWidth={1} size={16} />
  },
  {
    name: 'Apps',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/apps/calendar',
        name: 'Calendar'
      },
      {
        path: '/apps/messages',
        name: 'Messages'
      },
      {
        path: '/apps/social',
        name: 'Social'
      },
      {
        path: '/apps/chat',
        name: 'Chat'
      }
    ]
  },
  {
    path: '/widgets',
    name: 'Widgets',
    icon: <Droplet strokeWidth={1} size={16} />,
  },
  {
    name: 'Authentication',
    icon: <User strokeWidth={1} size={16} />,
    children: [
      {
        path: '/signin',
        name: 'Signin'
      },
      {
        path: '/signup',
        name: 'Signup'
      },
      {
        path: '/forgot',
        name: 'Forgot'
      },
      {
        path: '/lockscreen',
        name: 'Lockscreen'
      }
    ]
  },
];
