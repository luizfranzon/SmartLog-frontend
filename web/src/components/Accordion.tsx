'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import '../styles/accordionAnimation.css'

export function AccordionComponent() {
  return (
    <Accordion.Root className="flex flex-col gap-4" type="single" collapsible>
      <Accordion.Item value="item-1" className="rounded-md p-5">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger flex w-full justify-between text-left text-lg font-bold lg:text-2xl">
            <span>Atender às necessidades reais dos clientes</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit, expedita qui fugit accusamus, debitis nemo totam officiis
          adipisci provident possimus vero dolore modi voluptatum magni
          voluptates saepe veniam voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam blanditiis et excepturi
          praesentium, obcaecati quibusdam, suscipit id doloribus corrupti dicta
          sint culpa in tempore, esse quis enim est cum voluptas.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" className="rounded-md p-5">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger flex w-full justify-between text-left text-lg font-bold lg:text-2xl">
            <span>Cumprir as leis e regulamentações</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit, expedita qui fugit accusamus, debitis nemo totam officiis
          adipisci provident possimus vero dolore modi voluptatum magni
          voluptates saepe veniam voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam blanditiis et excepturi
          praesentium, obcaecati quibusdam, suscipit id doloribus corrupti dicta
          sint culpa in tempore, esse quis enim est cum voluptas.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3" className="rounded-md p-5">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger flex w-full justify-between text-left text-lg font-bold lg:text-2xl">
            <span>Melhorar continuamente</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit, expedita qui fugit accusamus, debitis nemo totam officiis
          adipisci provident possimus vero dolore modi voluptatum magni
          voluptates saepe veniam voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam blanditiis et excepturi
          praesentium, obcaecati quibusdam, suscipit id doloribus corrupti dicta
          sint culpa in tempore, esse quis enim est cum voluptas.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4" className="rounded-md p-5">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger flex w-full justify-between text-left text-lg font-bold lg:text-2xl">
            <span>Medir e monitorar a performance</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit, expedita qui fugit accusamus, debitis nemo totam officiis
          adipisci provident possimus vero dolore modi voluptatum magni
          voluptates saepe veniam voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam blanditiis et excepturi
          praesentium, obcaecati quibusdam, suscipit id doloribus corrupti dicta
          sint culpa in tempore, esse quis enim est cum voluptas.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-5" className="rounded-md p-5">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger flex w-full justify-between text-left text-lg font-bold lg:text-2xl">
            <span>Atrair e qualificar colaboradores e fornecedores</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit, expedita qui fugit accusamus, debitis nemo totam officiis
          adipisci provident possimus vero dolore modi voluptatum magni
          voluptates saepe veniam voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam blanditiis et excepturi
          praesentium, obcaecati quibusdam, suscipit id doloribus corrupti dicta
          sint culpa in tempore, esse quis enim est cum voluptas.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
