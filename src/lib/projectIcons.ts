import {
  BookImage,
  BookOpen,
  ChartLine,
  Code,
  Eye,
  Gem,
  MessageCircle,
  MicVocal,
  Music,
  Package,
  PencilRuler,
  Sparkles,
  StickyNote,
} from "lucide-svelte"

export const genericIcon = Sparkles

export const projectIcons: Record<string, typeof genericIcon> = {
  music: Music,
  code: Code,
  book: BookOpen,
  notes: StickyNote,
  package: Package,
  graph: ChartLine,
  editor: PencilRuler,
  preview: Eye,
  chat: MessageCircle,
  comic: BookImage,
  prism: Gem,
  lyrics: MicVocal,
}
