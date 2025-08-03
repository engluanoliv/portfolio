import { GitHub, LinkedIn, type Icon } from '@/ui/shadcn/components/icon'

export type DockDataType = {
  contact: {
    social: {
      GitHub: {
        name: string
        url: string
        icon: React.FC<React.SVGProps<SVGSVGElement>>
      }
      Linkedin: {
        name: string
        url: string
        icon: React.FC<React.SVGProps<SVGSVGElement>>
      }
      // Email: {
      // 	name: string;
      // 	url: string;
      // 	icon: keyof typeof Icon;
      // };
    }
  }
}

export const DOCK_DATA: DockDataType = {
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://www.github.com/engluanoliv/',
        icon: GitHub,
      },
      Linkedin: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/engluanoliv/',
        icon: LinkedIn,
      },
      // Email: {
      // 	name: "Send Email",
      // 	url: "",
      // 	icon: "Email",
      // },
    },
  },
}
