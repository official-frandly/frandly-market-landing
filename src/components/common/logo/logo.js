/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/base/link";

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={image} alt="startup landing logo" />
    </Link>
  );
}
