import { SlashIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { TabsDataProps } from "../data/tabsData";
import HrefLink from "./Link";

interface TabsProps {
    data: TabsDataProps[];
    children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({data}) => {
    const [selected, setSelected] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonHeight = 42;
    const items = data.toReversed();

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.classList.remove('animate-fade-in');
            void contentRef.current.offsetWidth;
            contentRef.current.classList.add('animate-fade-in');
        }
    }, [selected]);

    return (
        <div className="flex gap-10">
            <div className="tabs-items">
            {items.map(
                (item, index) => (
                    <button className={`tabs-item ${index === selected ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault()
                        setSelected(index)
                    }}
                    key={item.id}>
                        {item.company.name}
                    </button>
                )
            )}
            <div
                    className="absolute top-0 left-0 h-12 w-0.5 bg-indigo-400 transition-all duration-300 ease-in-out"
                    style={{ transform: `translateY(${selected * buttonHeight}px)` }}
                ></div>
            </div>
            <div ref={contentRef} className="flex-grow">
                <h3 className="font-semibold text-lg text-slate-300">
                    {items[selected].position} {items[selected].company.website !== "" ? (
                    <span className="text-indigo-400">
                        @ <HrefLink href={items[selected].company.website}>{items[selected].company.name}</HrefLink>
                    </span>
                ) : ''}</h3>
                <p className="mt-1 font-mono text-sm">
                    {items[selected].date.start.getFullYear() !== items[selected].date.end.getFullYear() ? items[selected].date.start.toLocaleString('en-US', {
                        month: 'long',
                        year: 'numeric'
                    }) : items[selected].date.start.toLocaleString('en-US', {
                        month: 'long'
                    })}
                    {' '}—{' '}
                    {items[selected].date.end.toDateString() !== new Date().toDateString() ? items[selected].date.end.toLocaleString('en-US', {
                        month: 'long',
                        year: 'numeric'
                    }) : 'Present'}
                </p>
                <ul className="mt-2">
                {items[selected].description.map((item, index) => (
                    <li className="flex gap-4" key={index}>
                        <SlashIcon className="text-indigo-400 h-3 w-3 mt-1.5" />
                        <p className="w-[600px]">{item}</p>
                        </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Tabs;