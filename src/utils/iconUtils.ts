import * as SimpleIcons from "react-icons/si";
import * as HeroIcons2 from "react-icons/hi2";
import { FaAws, FaCss3Alt, FaLinkedin } from "react-icons/fa6";
import { TbBrandOpenai, TbBrandAzure, TbMasksTheater } from "react-icons/tb";
import type { ComponentType } from "react";
import { Indexable } from "../interfaces/Indexable";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = ComponentType<any>;

// Brand icons that simple-icons (and therefore react-icons/si v5) no longer ships.
// Contentful entries keep their original icon names; we map them to equivalents here.
const ALIASES: Record<string, AnyIcon> = {
  SiAmazonaws: FaAws as AnyIcon,
  SiCss3: FaCss3Alt as AnyIcon,
  SiLinkedin: FaLinkedin as AnyIcon,
  SiOpenai: TbBrandOpenai as AnyIcon,
  SiMicrosoftazure: TbBrandAzure as AnyIcon,
  SiPlaywright: TbMasksTheater as AnyIcon,
};

export const getIcon = (name?: string | null): AnyIcon | undefined => {
  if (!name) return undefined;
  return (
    ALIASES[name] ||
    (SimpleIcons as Indexable)[name] ||
    (HeroIcons2 as Indexable)[name]
  );
};
