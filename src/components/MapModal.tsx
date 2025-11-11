
import React, { useState, lazy, Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LeafletMap = lazy(() => import("./LeafletMap").then(module => ({ default: module.LeafletMap })));

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCoords: (coords: { lat: number; lng: number }) => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose, onSelectCoords }) => {
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [map, setMap] = useState<any>(null);

  const handleMapClick = (e: any) => {
    setSelectedCoords(e.latlng);
  };

  const handleSelect = () => {
    if (selectedCoords) {
      onSelectCoords(selectedCoords);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Coordinates</DialogTitle>
        </DialogHeader>
        <div className="relative flex-grow">
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading map...</div>}>
                <LeafletMap onMapReady={setMap} onClick={handleMapClick} />
            </Suspense>
            {selectedCoords && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm p-2 rounded-lg shadow-card z-[1000]">
                    <p className="text-sm">Selected: {selectedCoords.lat.toFixed(4)}, {selectedCoords.lng.toFixed(4)}</p>
                </div>
            )}
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSelect} disabled={!selectedCoords}>
            Select
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
