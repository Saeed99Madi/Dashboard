import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify/iconify';
import { _orders } from 'src/_mock/_order';
import { _mockTakeaways } from 'src/_mock/mockTakeaways';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const homeIcon = (name) => (
  <SvgColor src={`/assets/icons/home/${name}.svg`} sx={{ width: 19, height: 19 }} />
);

const HeaderIcon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 19, height: 19 }}  />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  sales: icon('ic_sales'),
  person: icon('ic_person'),
  dashboard: icon('ic_home'),
  settings: icon('ic_settings'),
  support: icon('ic_support'),
  searchIcon: homeIcon('ic_search'),
  mic: homeIcon('ic_mic'),
  cloud: homeIcon('ic_cloud'),
  vote: homeIcon('ic_vote'),
  reportFile: homeIcon('ic_file'),
  comment: homeIcon('ic_comment'),
  crown: HeaderIcon('ic_crown'),
  notification: HeaderIcon('ic_notification'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: '  ',
        items: [
          {
            textColor: '#6EA9EE',
            itemAction: 'create_project',
            title: 'Create Project',
            path: '#',
            icon: <Iconify color="#6EA9EE" icon="mingcute:add-line" />,
          },
          // { title: 'Home', path: paths.dashboard.root, icon: ICONS.dashboard },
          {
            title: 'Sales team',
            children: [
              {
                title: 'All reports',
                path: paths.dashboard.root,
                orderLength: _orders.length 
              },
              {
                title: 'Takeaways',
                path: paths.dashboard.group.five,
                takeawaysLength: _mockTakeaways.length 
              },
            ],
            path: paths.dashboard.two,
            icon: ICONS.sales,
          },
          // {
          //   title: 'Shared with me',
          //   path: paths.dashboard.three,
          //   icon: ICONS.person,
          // },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      // {
      //   subheader: 'management',
      //   items: [
      //     {
      //       title: 'user',
      //       path: paths.dashboard.group.root,
      //       icon: ICONS.user,
      //       children: [
      //         { title: 'four', path: paths.dashboard.group.root },
      //         { title: 'five', path: paths.dashboard.group.five },
      //         { title: 'six', path: paths.dashboard.group.six },
      //       ],
      //     },
      //   ],
      // },
    ],
    []
  );

  return data;
}

export function useNavSettings() {
  const data = useMemo(
    () => [
      {
        subheader: '',
        items: [
          {
            title: 'Account settings',
            path: paths.dashboard.group.six,
            icon: ICONS.settings,
          },
          // { title: 'Support', path: paths.dashboard.seven, icon: ICONS.support },
        ],
      },
    ],
    []
  );

  return data;
}


export const useHomeData = () => {
  const data = useMemo(() => [
    {
      searchIcon: ICONS.searchIcon,
      mic: ICONS.mic,
      file: ICONS.reportFile,
      cloud: ICONS.cloud,
      comment: ICONS.comment,
      vote: ICONS.vote,
    },
  ], []);

  return data
} 


export const useHeaderData = () => {
  const data = useMemo(() => [
    {
      crown: ICONS.crown,
      notification: ICONS.notification,
    },
  ], []);

  return data
}