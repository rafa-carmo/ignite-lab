import { Route, Routes } from "react-router-dom";
import { Event } from "./templates/Event";
import { Subscribe } from "./templates/Subscribe";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}
