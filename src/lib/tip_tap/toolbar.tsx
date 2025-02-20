"use client";
import {
  Bold,
  Code,
  Heading1,
  Heading1Icon,
  Heading2,
  Heading2Icon,
  Heading3,
  Heading3Icon,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  ListTodoIcon,
  LucideIcon,
  Printer,
  Quote,
  Redo,
  RemoveFormattingIcon,
  SpellCheck,
  Strikethrough,
  Underline,
  Undo,
} from "lucide-react";
import { cn } from "../utils";
import type { Editor } from "@tiptap/react";
import { Separator } from "@/components/ui/separator";
import FontfamilyButton from "./font_family_btn";

interface ToolBarButtonProps {
  label?: string;
  onClick?: () => void;
  icon: LucideIcon;
  isActive?: boolean;
  disabled?: boolean;
}

const ToolBarButton = ({
  icon: Icon,
  isActive,
  onClick,
  disabled,
}: ToolBarButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "center cursor-pointer rounded-sm p-1 text-sm hover:bg-neutral-100",
          isActive && "bg-blue-100",
        )}
        disabled={disabled}
      >
        <Icon className="size-5" />
      </button>
      <Separator className="h-6 w-px bg-slate-300" />
    </>
  );
};

interface ToolbarProps {
  editor: Editor | null;
}

const ToolBar = ({ editor }: ToolbarProps) => {
  if (!editor) return null;

  const EditorActions: {
    label: string;
    icon: any;
    action: () => void;
    disabled?: boolean;
  }[][] = [
    // Editing Actions
    [
      {
        label: "Undo",
        icon: Undo,
        action: () => editor.chain().focus().undo().run(),
        disabled: !editor.can().undo(),
      },
      {
        label: "Redo",
        icon: Redo,
        action: () => editor.chain().focus().redo().run(),
        disabled: !editor.can().redo(),
      },
      {
        label: "Print",
        icon: Printer,
        action: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheck,
        action: () => {
          const current = editor.view.dom.getAttribute("spellcheck");
          if (current === "true") {
            editor.view.dom.removeAttribute("spellcheck");
          } else {
            editor.view.dom.setAttribute("spellcheck", "true");
          }
        },
      },
    ],
    // Heading Actions
    [
      {
        label: "H1",
        icon: Heading1Icon,
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        disabled: !editor.can().toggleHeading({ level: 1 }),
      },
      {
        label: "H2",
        icon: Heading2Icon,
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        disabled: !editor.can().toggleHeading({ level: 2 }),
      },
      {
        label: "H3",
        icon: Heading3Icon,
        action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        disabled: !editor.can().toggleHeading({ level: 3 }),
      },
    ],

    [
      {
        label: "Bold",
        icon: Bold,
        action: () => editor.chain().focus().toggleBold().run(),
        disabled: !editor.can().toggleBold(),
      },
      {
        label: "Italic",
        icon: Italic,
        action: () => editor.chain().focus().toggleItalic().run(),
        disabled: !editor.can().toggleItalic(),
      },
      {
        label: "Underline",
        icon: Underline,
        action: () => editor.chain().focus().toggleUnderline().run(),
        disabled: !editor.can().toggleUnderline(),
      },
      {
        label: "Strike",
        icon: Strikethrough,
        action: () => editor.chain().focus().toggleStrike().run(),
        disabled: !editor.can().toggleStrike(),
      },
    ],
    [
      {
        label: "List Todo",
        icon: ListTodoIcon,
        action: () => editor.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        action: () => editor.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="flex min-h-[2.8rem] items-center gap-x-5 bg-white px-5 py-0.5">
      {EditorActions.map((group, index) => (
        <div key={index} className="flex gap-x-2">
          {group.map(({ label, icon, action, disabled }) => (
            <ToolBarButton
              key={label}
              label={label}
              icon={icon}
              onClick={action}
              disabled={disabled}
            />
          ))}
        </div>
      ))}
      <FontfamilyButton editor={editor} />
    </div>
  );
};

export default ToolBar;
