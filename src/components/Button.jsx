export default function Button(props) {
  return (
    <button
      class="bg-[#F1F7FF] text-[#5383DF] text-2xl w-64 h-16 rounded-2xl hover:bg-[#5383DF] hover:text-[#F1F7FF] drop-shadow-lg py-2 px-4 headerFont"
      {...props}
    >
      Let's get wooshed
    </button>
  );
}
