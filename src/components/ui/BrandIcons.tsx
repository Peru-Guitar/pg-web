import {
  siFacebook,
  siInstagram,
  siSpotify,
  siTiktok,
  siYoutube,
  type SimpleIcon,
} from "simple-icons";

/** Brand logos from simple-icons (CC0). Only the imported ones end up in the bundle. */
export interface BrandIconProps {
  size?: number;
  className?: string;
}

const BrandIcon = ({
  icon,
  size = 24,
  className,
}: BrandIconProps & { icon: SimpleIcon }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d={icon.path} />
  </svg>
);

export const SpotifyIcon = (props: BrandIconProps) => (
  <BrandIcon icon={siSpotify} {...props} />
);
export const TikTokIcon = (props: BrandIconProps) => (
  <BrandIcon icon={siTiktok} {...props} />
);
export const InstagramIcon = (props: BrandIconProps) => (
  <BrandIcon icon={siInstagram} {...props} />
);
export const YoutubeIcon = (props: BrandIconProps) => (
  <BrandIcon icon={siYoutube} {...props} />
);
export const FacebookIcon = (props: BrandIconProps) => (
  <BrandIcon icon={siFacebook} {...props} />
);
