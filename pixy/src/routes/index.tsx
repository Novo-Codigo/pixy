import { Title } from "@solidjs/meta";
import Container from "~/components/containers/container";
import { AiFillCaretUp, AiOutlineEyeInvisible } from 'solid-icons/ai'
import { TbOutlineTransactionDollar } from "solid-icons/tb";

export default function Home() {
  return (
    <main class="p-4">
      <Title>Pixy | Home</Title>
      <img src="/hero.avif" alt="Inosuke looking at a Japan landscape" class="fixed top-0 left-0 z-[-1]" />
      <header>
      </header>
      <section class="flex flex-col gap-4">
        <Container bgImage="/growth.avif">
          <div class="row-flex-gap">
            <p>Saldo Atual</p>
            <button class="cursor-pointer">
              <AiOutlineEyeInvisible />
            </button>
          </div>
          <p>R$32342</p>
          <p class="row-flex-gap">
            <AiFillCaretUp />
            +12,4% este mês
          </p>
        </Container>

        <Container>
          <span class="flex flex-col items-center justify-center">
            <span>
              <TbOutlineTransactionDollar />
            </span>
            <a>Transferir</a>
          </span>
          <a>Metas</a>
        </Container>
      </section>
    </main>
  );
}
