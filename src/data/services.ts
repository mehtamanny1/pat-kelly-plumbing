export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: string // lucide-react icon name
}

export const services: Service[] = [
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDescription: 'Fast, effective drain clearing for kitchens, bathrooms, and main lines.',
    description: "Slow or clogged drains are more than an inconvenience — they can lead to backups and water damage. We use professional-grade equipment to clear blockages quickly and get your drains flowing freely again.",
    icon: 'Droplets',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation & Repair',
    shortDescription: 'Installation, repair, and replacement of tank and tankless water heaters.',
    description: "Whether your water heater is leaking, not heating, or simply at the end of its life, we handle installations and repairs for both tank and tankless systems. We'll help you choose the right unit for your home and budget.",
    icon: 'Flame',
  },
  {
    id: 'leak-repair',
    title: 'Leak Detection & Repair',
    shortDescription: 'Locate and fix leaks before they become costly water damage.',
    description: "Hidden leaks can cause significant damage over time. We use proven detection methods to pinpoint the source of leaks — whether behind walls, under slabs, or in your yard — and repair them efficiently.",
    icon: 'Droplet',
  },
  {
    id: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    shortDescription: 'Repair or replace damaged, corroded, or burst pipes.',
    description: "From a single burst pipe to full repiping of an older home, we have the experience to handle pipe work of any scale. We work quickly to minimize disruption and restore your plumbing system to full function.",
    icon: 'Wrench',
  },
  {
    id: 'toilet-repair',
    title: 'Toilet Repair & Replacement',
    shortDescription: 'Fix running toilets, clogs, leaks, or install a new unit.',
    description: "A running or leaking toilet wastes water and drives up your bill. We repair or replace flappers, fill valves, wax rings, and more — or install a new toilet if it's time for an upgrade.",
    icon: 'RefreshCw',
  },
  {
    id: 'faucet-fixture',
    title: 'Faucet & Fixture Installation',
    shortDescription: 'Install or replace faucets, showerheads, and fixtures throughout your home.',
    description: "Upgrade your kitchen or bathroom with new fixtures, or let us replace a dripping faucet that's been driving you crazy. We handle all makes and models and ensure everything is installed correctly the first time.",
    icon: 'Settings2',
  },
  {
    id: 'garbage-disposal',
    title: 'Garbage Disposal',
    shortDescription: 'Installation, repair, and replacement of garbage disposals.',
    description: "Is your garbage disposal humming, jammed, or leaking? We repair existing units or install new ones quickly — helping keep your kitchen clean and functional.",
    icon: 'RotateCcw',
  },
  {
    id: 'sump-pump',
    title: 'Sump Pump',
    shortDescription: 'Install or service your sump pump to protect your basement from flooding.',
    description: "A properly functioning sump pump is your first line of defense against basement flooding. We install, repair, and maintain sump pumps to keep your home protected — especially important in Greater Cincinnati's wet seasons.",
    icon: 'ArrowDownToLine',
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDescription: 'Rapid response for burst pipes, major leaks, and plumbing emergencies.',
    description: "Plumbing emergencies don't wait for business hours. When you're dealing with a burst pipe, severe leak, or sewage backup, call us for fast, professional help to minimize damage and restore your home.",
    icon: 'AlertCircle',
  },
]
