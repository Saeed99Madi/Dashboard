import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
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
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            textColor: '#6EA9EE',
            itemAction: 'create_project',
            title: 'Create Project',
            path: '#',
            icon: <Iconify color="#6EA9EE" icon="mingcute:add-line" />,
          },
          { title: 'Home', path: paths.dashboard.root, icon: ICONS.dashboard },
          {
            title: 'Sales team',
            children: [
              {
                title: 'All reports',
                path: paths.dashboard.group.root,
              },
              {
                title: 'Takeaways',
                path: paths.dashboard.group.five,
              },
            ],
            path: paths.dashboard.two,
            icon: ICONS.ecommerce,
          },
          {
            title: 'Shared with me',
            path: paths.dashboard.three,
            icon: ICONS.analytics,
          },
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
            icon: ICONS.dashboard,
          },
          { title: 'Support', path: paths.dashboard.seven, icon: ICONS.dashboard },
        ],
      },
    ],
    []
  );

  return data;
}
