import React from "react";
import { Layout } from "@/components/layout";
import { Row } from "@/components/row";
import { Label } from "@/components/label";
import { ChartPieIcon, CheckCircleIcon, PaintBrushIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon, Square3Stack3DIcon, StarIcon } from "@heroicons/react/24/outline";
import { AnimationIcon, MotionIcon } from "@/icons";
import { CheckBadgeIcon, PencilIcon } from "@heroicons/react/24/solid";

export default function Courses() {
  return (
    <Layout>
      <div className="bg-dark-900 pt-32">
        <div className="divide-y-2 divide-dark-200 border-y-2 border-dark-200">
          <Row
            number={1}
            title="2d & 3d"
            description="Modeling, lighting, animation, and many other important topics for 3D"
            icon={<LightBulbIcon className="h-full w-full text-gold" />}
            labels={
              <>
                <Label
                  delay={0.2}
                  icon={<ChartPieIcon className="h-full w-full text-gold" />}
                >
                  basics
                </Label>
                <Label
                  delay={0.2}
                  icon={<CheckCircleIcon className="h-full w-full text-gold" />}
                >
                  new
                </Label>
                <Label
                  delay={0.2}
                  icon={<PaintBrushIcon className="h-full w-full text-gold" />}
                >
                  2d & 3d
                </Label>
              </>
            }
          />
          <Row
            number={2}
            title="motion"
            description="Master basic 3D principles and lay the foundation for the future"
            icon={<Square3Stack3DIcon className="h-full w-full text-gold" />}
            labels={
              <>
                <Label
                  delay={0.3}
                  icon={<MotionIcon className="h-full w-full text-gold" />}
                >
                  motion
                </Label>
                <Label
                  delay={0.3}
                  icon={<PencilIcon className="h-full w-full text-gold" />}
                >
                  animation, vfx
                </Label>
              </>
            }
          />
          <Row
            number={3}
            title="vfx 23"
            description="VFX 2023 Cinema 4D course from Maxon Certified Trainer, John Maloni"
            icon={<StarIcon className="h-full w-full text-gold" />}
            labels={
              <>
                <Label
                  delay={0.4}
                  icon={<AnimationIcon className="h-full w-full text-gold" />}
                >
                  Animation
                </Label>
                <Label
                  delay={0.4}
                  icon={<CheckBadgeIcon className="h-full w-full text-gold" />}
                >
                  certified trainer
                </Label>
              </>
            }
          />
        </div>
      </div>
    </Layout>
  );
}
