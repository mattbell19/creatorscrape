"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { RefreshCw } from 'lucide-react'

export default function SearchFilters() {
  return (
    <div className="w-[280px] space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-white">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-white">Account subject</h3>
          <div className="space-y-3">
            {[
              "Lifestyle",
              "Sport",
              "Music",
              "Comedy",
              "Games",
              "Fashion",
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={item.toLowerCase()} defaultChecked={["lifestyle", "sport", "comedy", "fashion"].includes(item.toLowerCase())} />
                <Label htmlFor={item.toLowerCase()} className="text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white">Followers</h3>
          <div className="px-2">
            <Slider
              defaultValue={[10, 225]}
              min={0}
              max={500}
              step={1}
              className="py-4"
              styles={{
                track: {
                  background: 'linear-gradient(to right, #CEFF00, #CEFF00)',
                },
                range: {
                  background: '#CEFF00',
                },
                thumb: {
                  background: '#CEFF00',
                },
              }}
            />
            <div className="flex items-center justify-between text-sm text-zinc-400">
              <span>10-225k</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white">Ad price</h3>
          <div className="px-2">
            <Slider
              defaultValue={[100, 3000]}
              min={0}
              max={5000}
              step={100}
              className="py-4"
              styles={{
                track: {
                  background: 'linear-gradient(to right, #CEFF00, #CEFF00)',
                },
                range: {
                  background: '#CEFF00',
                },
                thumb: {
                  background: '#CEFF00',
                },
              }}
            />
            <div className="flex items-center justify-between text-sm text-zinc-400">
              <span>$100-3000</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white">Stories per day</h3>
          <RadioGroup defaultValue="10-20">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="<10" id="<10" />
                <Label htmlFor="<10" className="text-white">{"<10"}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10-20" id="10-20" />
                <Label htmlFor="10-20" className="text-white">10-20</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="20-30" id="20-30" />
                <Label htmlFor="20-30" className="text-white">20-30</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30+" id="30+" />
                <Label htmlFor="30+" className="text-white">30+</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

