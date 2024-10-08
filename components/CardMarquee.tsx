"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MarqueeItem {
  title: string;
  description: string;
}

interface CardMarqueeProps {
  items: MarqueeItem[];
}

const CardMarquee: React.FC<CardMarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex animate-marquee space-x-4">
        {[...items, ...items].map((item, index) => (
          <Card key={index} className={cn("w-[300px] flex-shrink-0")}>
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardMarquee;