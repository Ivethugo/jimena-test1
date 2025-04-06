import { ScrollTimelineEffect } from "../index.ts";

export function Timeline() {
  return (
    <>
      <div className="absolute top-4">
        <ScrollTimelineEffect>
          <div className="w-4 h-[100px] flex justify-center relative">
            <div className="w-4 h-4 rounded-lg border-2 absolute bg-current"></div>
            <div className="w-1 h-[94px] absolute top-4 bg-current"></div>
          </div>
        </ScrollTimelineEffect>
      </div>
      <div className="absolute top-[126px]">
        <ScrollTimelineEffect>
          <div className="w-4 h-[100px] flex justify-center relative">
            <div className="w-4 h-4 rounded-lg border-2 absolute bg-current"></div>
            <div className="w-1 h-[94px]absolute top-4 bg-current"></div>
          </div>
        </ScrollTimelineEffect>
      </div>
      <div className="absolute top-[226px]">
        <ScrollTimelineEffect>
          <div className="w-4 h-[100px] flex justify-center relative">
            <div className="w-4 h-4 rounded-lg border-2 absolute bg-current"></div>
            <div className="w-1 h-[94px] absolute top-4 bg-current"></div>
          </div>
        </ScrollTimelineEffect>
      </div>
      <div className="absolute top-[336px]">
        <ScrollTimelineEffect>
          <div className="w-4 h-[100px] flex justify-center relative">
            <div className="w-4 h-4 rounded-lg border-2 absolute bg-current"></div>
            <div className="w-1 h-[94px] absolute top-4 bg-current"></div>
          </div>
        </ScrollTimelineEffect>
      </div>
      <div className="absolute top-[446px]">
        <ScrollTimelineEffect>
          <div className="w-4 h-[100px] flex justify-center relative">
            <div className="w-4 h-4 rounded-lg border-2 absolute bg-current"></div>
            <div className="w-1 h-[94px] absolute top-4 bg-current"></div>
            <div className="w-4 h-4 rounded-lg border-2 absolute top-27 bg-current"></div>
          </div>
        </ScrollTimelineEffect>
      </div>
    </>
  );
}
