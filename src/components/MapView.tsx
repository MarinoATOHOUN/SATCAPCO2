import React, { Suspense, lazy } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

const LeafletMap = lazy(() => import("./LeafletMap").then(module => ({ default: module.LeafletMap })));

const MapControlButtons = ({ onZoomIn, onZoomOut, onReset }: {
  onZoomIn: () => void; 
  onZoomOut: () => void; 
  onReset: () => void;
}) => {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
      <Button 
        size="icon" 
        variant="secondary" 
        className="bg-background shadow-lg"
        onClick={onZoomIn}
      >
        <ZoomIn className="h-4 w-4" />
      </Button>
      <Button 
        size="icon" 
        variant="secondary" 
        className="bg-background shadow-lg"
        onClick={onZoomOut}
      >
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button 
        size="icon" 
        variant="secondary" 
        className="bg-background shadow-lg"
        onClick={onReset}
      >
        <Maximize2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const MapView = () => {
  const [map, setMap] = React.useState<any>(null);
  const emissionPointsCount = 12;

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Global Emissions Visualization
          </h3>
          <p className="text-sm text-muted-foreground">
            {emissionPointsCount} data points • Click on markers for detailed information
          </p>
        </div>
        <Button size="sm">Update</Button>
      </div>

      {/* Map Container */}
      <div className="relative rounded-lg overflow-hidden" style={{ height: "500px" }}>
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading map...</div>}>
          <LeafletMap onMapReady={setMap} />
        </Suspense>
        
        {/* External Map Controls */}
        {map && (
          <MapControlButtons
            onZoomIn={() => map.zoomIn()}
            onZoomOut={() => map.zoomOut()}
            onReset={() => map.setView([20, 0], 2)}
          />
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm p-3 rounded-lg shadow-card z-[1000]">
          <p className="text-xs font-semibold mb-2">Emission Intensity</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--co2-color))' }} />
              <span className="text-xs">CO₂</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--ch4-color))' }} />
              <span className="text-xs">CH₄</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--co-color))' }} />
              <span className="text-xs">CO</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
