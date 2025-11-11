import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  MapPin,
  Calendar as CalendarIcon,
  Filter,
  Globe,
} from "lucide-react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { MapModal } from "./MapModal";

const GasOptions = [
  { value: "co2", label: "CO₂" },
  { value: "ch4", label: "CH₄" },
  { value: "co", label: "CO" },
  { value: "n2o", label: "N₂O" },
  { value: "co2_ch4", label: "CO₂ & CH₄" },
  { value: "co2_co", label: "CO₂ & CO" },
  { value: "all", label: "All Gases (CO₂, CH₄, CO, N₂O)" },
];

export const FilterBar = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });
  const [country, setCountry] = useState("all");
  const [gas, setGas] = useState("all");
  const [coords, setCoords] = useState({ lat: "", lon: "" });
  const [isMapModalOpen, setMapModalOpen] = useState(false);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude.toFixed(4),
        lon: position.coords.longitude.toFixed(4),
      });
    });
  };

  const handleSelectCoords = (selectedCoords: { lat: number; lng: number }) => {
    setCoords({ lat: selectedCoords.lat.toFixed(4), lon: selectedCoords.lng.toFixed(4) });
    setMapModalOpen(false);
  };

  const applyFilters = () => {
    console.log("Applying filters:", { date, country, gas, coords });
    // This is where you would typically trigger a data refetch
  };

  return (
    <>
      <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 items-end">
          {/* Date Range Picker */}
          <div className="space-y-2">
            <Label htmlFor="date-range">Date Range</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date-range"
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "MM/dd/yy")} -{" "}
                        {format(date.to, "MM/dd/yy")}
                      </>
                    ) : (
                      format(date.from, "MM/dd/yy")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Country Selector */}
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="russia">Russia</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Gas Selector */}
          <div className="space-y-2">
            <Label htmlFor="gas">Gas</Label>
            <Select value={gas} onValueChange={setGas}>
              <SelectTrigger id="gas">
                <SelectValue placeholder="Select a gas" />
              </SelectTrigger>
              <SelectContent>
                {GasOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Coordinates */}
          <div className="space-y-2">
            <Label>Coordinates</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Lat"
                value={coords.lat}
                onChange={(e) => setCoords({ ...coords, lat: e.target.value })}
              />
              <Input
                placeholder="Lon"
                value={coords.lon}
                onChange={(e) => setCoords({ ...coords, lon: e.target.value })}
              />
            </div>
          </div>
          
          {/* Location Button */}
          <div className="space-y-2">
              <Label>Use current location</Label>
              <Button variant="outline" className="w-full" onClick={handleLocation}>
                  <MapPin className="mr-2 h-4 w-4" />
                  My Location
              </Button>
          </div>

          {/* Map Button */}
          <div className="space-y-2">
              <Label>Select on map</Label>
              <Button variant="outline" className="w-full" onClick={() => setMapModalOpen(true)}>
                  <Globe className="mr-2 h-4 w-4" />
                  Select on Map
              </Button>
          </div>

          {/* Apply Button */}
          <Button onClick={applyFilters} className="w-full">
            <Filter className="mr-2 h-4 w-4" />
            Apply
          </Button>
        </div>
      </div>
      <MapModal 
        isOpen={isMapModalOpen}
        onClose={() => setMapModalOpen(false)}
        onSelectCoords={handleSelectCoords}
      />
    </>
  );
};
