const myArtPick = [
  {
    id: 1,
    artist: "Mierle Laderman Ukeles",
    media: "performance",
    title: "Washing/Tracks/Maintenance: Outside (July 23, 1973)",
    details:
      "Ukeles’s public action called attention to the 'invisible'labor often performed by women and the working class. She created a political body of art that focused on important, but undervalued, tasks. In this particular series of actions at the Wadsworth Atheneum, she highlighted the labor of maintenance and cleaning that is necessary to cultural spaces like the museum, but goes unnoticed and is often underpaid and undervalued. In the 1960s and 1970s, institutional critique emerged as an artistic strategy that criticized the power structures and cultural hierarchies of spaces like the museum. Engaging with the inequities and injustices of how we think about maintenance work, Ukeles created a new area of art-making, which she called “Maintenance Art.” This included the repetitive, and often thankless work of cleaning and repair that is essential to the functioning of domestic and public spaces.",
  },
  {
    id: 2,
    artist: "Félix González-Torres",
    media: "installation",
    title: '"Untitled" (Perfect Lovers)',
    details:
      "Untitled (Perfect Lovers) (1991) is one of Félix González-Torres's famous works. It consists of two clocks that start in synchronization. Slowly and expectedly, they fall out of time. This is caused by running out of batteries as well as the nature of the mechanism. The piece is a moving comment on his private life. It symbolizes the artist’s HIV-positive partner Ross Laycock and his dawdling decline and inevitable death from AIDS. The two clocks represent two mechanical heartbeats, which are illustrative of the two lives ordained to fall out of sync and carry moving poetry about personal loss and the temporal nature of life.",
  },
  {
    id: 3,
    artist: "Miriam Schapiro",
    media: "painting",
    title: "The grand heart",
    details:
      "Femmages is a term Miriam Schapiro coined to describe her distinctive hybrid of painting and collage inspired by women’s domestic arts and crafts and the feminist critique of the hierarchy of art and craft. Her work and leadership played a pivotal role in the expansion of the art world to include historically marginalized forms of craft, decoration, and abstract patterning associated with femininity and women’s work. Although she is unheralded as the source, the influence of Schapiro’s subjective approach to forms of decoration can be identified today in an remarkably diverse group of artists who continue to find inspiration in her embrace of artistic practices outside the art historical canon.",
  },
];
const data = () => {
  return [...myArtPick];
};
const find = (id) => {
  const post = myArtPick.find((post) => post.id === +id);
  return { ...post };
};

module.exports = { data: data, find: find };
