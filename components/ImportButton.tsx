'use client';

import { Github, Twitter } from 'lucide-react';

export default function ImportButton({
  platform,
}: {
  platform: 'github' | 'twitter';
}) {
  const config = {
    github: {
      name: 'GitHub',
      icon: Github,
      color: 'border-gray-700 hover:border-gray-500',
    },
    twitter: {
      name: 'X / Twitter',
      icon: Twitter,
      color: 'border-gray-700 hover:border-blue-500',
    },
  };

  const cfg = config[platform];
  const Icon = cfg.icon;

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 border rounded ${cfg.color} transition-colors`}
    >
      <Icon size={18} />
      Import {cfg.name}
    </button>
  );
}
