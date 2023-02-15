import { Link } from "@remix-run/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type { MotionValue } from "framer-motion";

const resources = [
  {
    href: "/projects",
    name: "projects",
    description:
      "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: "/notes",
    name: "notes",
    description:
      "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
];

type ResourcePatternProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

function ResourcePattern({ mouseX, mouseY }: ResourcePatternProps) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#20252E] to-[#2c2833] opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}

type ResourceProps = {
  resource: {
    href: string;
    name: string;
    description: string;
    pattern: {
      y: number;
      squares: number[][];
    };
  };
};

function Resource({ resource }: ResourceProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<Element, MouseEvent>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <li
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-gray-0"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      {/* ring-1 ring-inset  ring-white/10 group-hover:ring-white/20 */}
      <div className="absolute inset-0 rounded-2xl" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <h3 className="mt-4 text-sm font-semibold leading-7 text-gray-12">
          <Link to={resource.href} className="flex items-center text-base">
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
            <span role="img" className="ml-[4px]">
              <ArrowTopRightIcon
                height="18"
                width="18"
                color="hsl(0 0% 43.9%)"
              />
            </span>
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-11">{resource.description}</p>
      </div>
    </li>
  );
}

export function Resources() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 ">
      {resources.map((resource) => (
        <Resource key={resource.href} resource={resource} />
      ))}
    </ul>
  );
}
