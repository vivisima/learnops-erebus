const ICONS = [
  '001-robotics.svg',
  '002-robotics-1.svg',
  '003-robotics-2.svg',
  '004-robotics-3.svg',
  '005-robotics-4.svg',
  '006-robotics-5.svg',
  '007-robotics-6.svg',
  '008-robotics-7.svg',
  '009-robotics-8.svg',
  '010-robotics-9.svg',
  '011-robotics-10.svg',
  '012-robotics-11.svg',
  '013-robotics-12.svg',
  '014-robotics-13.svg',
  '015-robotics-14.svg',
  '016-robotics-15.svg',
  '017-robotics-16.svg',
  '018-robotics-17.svg',
  '019-robotics-18.svg',
  '020-robotics-19.svg',
  '021-robotics-20.svg',
  '022-robotics-21.svg',
  '023-robotics-22.svg',
  '024-robotics-23.svg',
  '025-robotics-24.svg',
  '026-robotics-25.svg',
  '027-robotics-26.svg',
  '028-robotics-27.svg',
  '029-robotics-28.svg',
  '030-robotics-29.svg',
  '031-robotics-30.svg',
  '032-robotics-31.svg',
  '033-robotics-32.svg',
  '034-robotics-33.svg',
  '035-robotics-34.svg',
  '036-robotics-35.svg',
  '037-robotics-36.svg',
  '038-robotics-37.svg',
  '039-robotics-38.svg',
  '040-robotics-39.svg',
  '041-robotics-40.svg',
  '042-robotics-41.svg',
  '043-robotics-42.svg',
  '044-robotics-43.svg',
  '045-robotics-44.svg',
  '046-robotics-45.svg',
  '047-robotics-46.svg',
  '048-robotics-47.svg',
  '049-robotics-48.svg',
  '050-robotics-49.svg',
  '051-robotics-50.svg',
  '052-robotics-51.svg',
  '053-robotics-52.svg',
  '054-robotics-53.svg',
  '055-robotics-54.svg',
  '056-robotics-55.svg',
  '057-robotics-56.svg',
  '058-robotics-57.svg',
  '059-robotics-58.svg',
  '060-robotics-59.svg',
  '061-robotics-60.svg',
  '062-robotics-61.svg',
  '063-robotics-62.svg',
  '064-robotics-63.svg',
  '065-robotics-64.svg',
  '066-robotics-65.svg',
  '067-robotics-66.svg',
  '068-robotics-67.svg',
  '069-robotics-68.svg',
  '070-robotics-69.svg',
  '071-robotics-70.svg',
  '072-robotics-71.svg',
  '073-robotics-72.svg',
  '074-robotics-73.svg',
  '075-robotics-74.svg',
  '076-robotics-75.svg',
  '077-robotics-76.svg',
  '078-robotics-77.svg',
  '079-robotics-78.svg',
  '080-robotics-79.svg',
  '081-robotics-80.svg',
  '082-robotics-81.svg',
  '083-robotics-82.svg',
  '084-robotics-83.svg',
  '085-robotics-84.svg',
  '086-robotics-85.svg',
  '087-robotics-86.svg',
  '088-robotics-87.svg',
  '089-robotics-88.svg',
  '090-robotics-89.svg',
  '091-robotics-90.svg',
  '092-robotics-91.svg',
  '093-robotics-92.svg',
  '094-robotics-93.svg',
  '095-robotics-94.svg',
  '096-robotics-95.svg',
  '097-robotics-96.svg',
  '098-robotics-97.svg',
  '099-robotics-98.svg',
  '100-robotics-99.svg',
]

const NAMES = [
  'Main Battle Emulator',
  'Robotic Piloting Droid',
  'Adept Troubleshooting Golem',
  'Secondary Animal Protection Droid',
  'Supreme Sabotage Technology',
  'Personal Spacecraft Defense Drone',
  'Self-Aware Assassination Bot',
  'Prime Vegetation Juggernaut',
  'Sensitive Repairation Bot',
  'Highpowered Protection Automaton',
  'Perceptive Translation Prototype',
  'Generic Mining Juggernaut',
  'Experimental Instructor Android',
  'Rational Waste Collection Bot',
  'Extreme Garbage Disposal Robot',
  'Electronic Neutralization Device',
  'Extra-Terrestrial Excevation',
  'Super Spacecraft Defense Golem',
  'Self-Reliant Planet Examination',
  'Dynamic Diplomacy Drone',
  'Extreme Airplane Control Bot',
  'Sensory Inspection Golem',
  'General Safety Drone',
  'Digital Algorithm Device',
  'Anne Droid',
  'Adept Laboratorium Technician',
  'Mechanical Air Defense Technology',
  'Strategic Utility Automaton',
  'Mechanized Battle Robot',
  'Andromeda',
  'Cybernetic Simulation Robot',
  'Cybernetic Oceanic Cyborg',
  'Self-Reliant Oceanic Drone',
  'Essential Emulation Emulator',
  'Perceptive Servant Android',
  'Dynamic Bomb Disposal Prototype',
  'Highpowered War Prototype',
  'Motorized Data Analyzing Robot',
  'Main Diplomacy Automaton',
  'Mechanical Detection Droid',
  'Rational Space Explorer',
  'Life Emulation Juggernaut',
  'Efficient Data Juggernaut',
  'Bionic Domination Entity',
  'Temporary Simulation Machine',
  'Electronic Peacekeeping Technology',
  'Cybernetic Supervision Prototype',
  'Primary Peacekeeping Machine',
  'General Examination Entity',
  'Programmed Emergency Technology',
  'Highpowered Instructor Device',
  'Reactive Invasion Prototype',
  'Exceptional Evasion Entity',
  'Essential Usher Prototype',
  'General Neutralization Juggernaut',
  'Synchronized Contamination Droid',
  'Global Data Analyzing Bot',
  'Supreme Travel Golem',
  'Temporary Enforcer Technology',
  'Reactive War Domination Emulator',
  'Compact Expedition Droid',
  'Responsive Safety Guard Emulator',
  'Dynamic Mining Robot',
  'Extra-Terrestrial Pilot Juggernaut',
  'Personal Emergency Machine',
  'Autonomous Probe Automaton',
  'Preliminary Safety Bot',
  'Compact Algorithm Automaton',
  'Extreme First Aid Automaton',
  'Efficient Eradication Android',
  'Bionic Management Technician',
  'Extreme Unit Response Droid',
  'Super Domination Golem',
  'Self-Regulaing Expedition Golem',
  'Main Sanitation Robot',
  'Essential Science Cyborg',
  'Independent Medical Entity',
  'Motorized Contamination Golem',
  'Extreme Construction Android',
  'Intelligent Excretion Automaton',
  'Reactive Excevation Automaton',
  'Preliminary Pilot Cyborg',
  'Bio-Electrionic Utility Device',
  'Humanoid Air Defense Robot',
  'Adept Animal Handling Technology',
  'Extra-Terrestrial Observer Automaton',
  'Artificial Planet Exploration Golem',
  'Advanced Spacecraft Defense Device',
  'Essential Emergency Response Bot',
  'Life Simulation Technician',
  'Main Data Protection Robot',
  'Universal Human Control Cyborg',
  'Rational Safety Guard Prototype',
  'Secondary Travel Robot',
  'Essential Algorithm Entity',
  'Strategic First Aid Robot',
  'Neohuman Life Simulation Device',
  'Extra-Terrestrial Space Drone',
  'Artificial Planet Defence Drone',
  'Super Medical Prototype',
]

const basePath = '/assets/robotics/'

export const dropdownIcons = ICONS.map((icon, index) => {
  return {
    text: NAMES[index],
    value: `${index}`,
    image: { src: `${basePath}${icon}` },
  }
})
