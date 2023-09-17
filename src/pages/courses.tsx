import React from "react";
import { Layout } from "@/components/layout";
import { Row } from "@/components/row";
import { Label } from "@/components/label";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function Courses() {
  return (
    <Layout>
      <div className="bg-red-600 pt-32 divide-y-2 divide-dark-200 border-y-2 border-dark-200">
        <Row
          number={1}
          title="2d & 3d"
          description="Modeling, lighting, animation, and many other important topics for 3D"
          icon={<LightBulbIcon className="h-full w-full text-gold" />}
          labels={
            <>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>basics</Label>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>new</Label>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>
                2d & 3d
              </Label>
            </>
          }
        />
        <Row
          number={2}
          title="motion"
          description="Master basic 3D principles and lay the foundation for the future"
          icon={<LightBulbIcon className="h-full w-full text-gold" />}
          labels={
            <>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>motion</Label>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>animation, vfx</Label>
            </>
          }
        />
        <Row
          number={3}
          title="vfx 23"
          description="VFX 2023 Cinema 4D course from Maxon Certified Trainer, John Maloni"
          icon={<LightBulbIcon className="h-full w-full text-gold" />}
          labels={
            <>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>Animation</Label>
              <Label icon={<PaintBrushIcon className="h-full w-full text-gold" />}>certified trainer</Label>
            </>
          }
        />
      </div>
    </Layout>
  );
}
