import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CoinsIcon, TrendingUpIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../../utils/types';
import { Badge } from './Badge';

type PropertyCardProps = {
  property: Property;
  featured?: boolean;
};

export function PropertyCard({
  property,
  featured = false,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const progressPercentage = (property.tokensSold / property.totalTokens) * 100;

  return (
    <motion.article
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group bg-void-800/70 border border-void-700/80 rounded-2xl overflow-hidden hover:border-accent/25 hover:shadow-glow-sm transition-all duration-300"
    >
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-void-950/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge
              color={
                property.status === 'Available'
                  ? 'green'
                  : property.status === 'Sold Out'
                    ? 'red'
                    : 'yellow'
              }
            >
              {property.status}
            </Badge>
          </div>
          {property.status === 'Sold Out' && isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-void-950/85 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="font-display font-semibold text-accent text-lg">Sold Out</span>
            </motion.div>
          )}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display font-bold text-xl text-cream-100 line-clamp-2 drop-shadow-lg">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5 text-cream-300/90 text-sm">
              <MapPinIcon size={14} className="flex-shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-4 text-sm text-cream-400 mb-4">
            <span className="flex items-center gap-1.5">
              <TrendingUpIcon size={14} className="text-secondary" />
              {property.returnRate}% APY
            </span>
            <span>{property.tokensSold} / {property.totalTokens} tokens</span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-cream-400">Progress</span>
              <span className="text-cream-200 font-medium">{progressPercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full h-1.5 bg-void-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-void-700">
            <div className="flex items-center gap-1.5">
              <CoinsIcon size={18} className="text-accent" />
              <span className="font-display font-semibold text-cream-100 text-lg">
                {property.tokenPrice} ETH
              </span>
              <span className="text-cream-400 text-sm">/ token</span>
            </div>
            <span className="text-accent text-sm font-medium group-hover:underline">
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
