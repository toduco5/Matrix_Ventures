import React from 'react';
import EcosystemHero from '@/components/ecosystem/EcosystemHero';
import RoleCards from '@/components/ecosystem/RoleCards';
import FlowProcess from '@/components/ecosystem/FlowProcess';
import PlatformStats from '@/components/ecosystem/PlatformStats';
import WhyTrust from '@/components/ecosystem/WhyTrust';

export default function Ecosystem() {
  return (
    <div className="w-full">
      <EcosystemHero />
      <PlatformStats />
      <RoleCards />
      <FlowProcess />
      <WhyTrust />
    </div>
  );
}